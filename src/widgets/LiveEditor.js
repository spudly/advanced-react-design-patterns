import React, {useState, useCallback, useRef, useEffect} from 'react';
import {LiveProvider, LivePreview, LiveError} from 'react-live';
import Split from 'react-split';
import diff from 'fast-diff';
import {transform} from '@babel/standalone';
import presetEnv from '@babel/preset-env';
import presetReact from '@babel/preset-react';
import pluginClassProperties from '@babel/plugin-proposal-class-properties';
import * as monaco from 'monaco-editor';
import Editor from './Editor';
import debounce from '../utils/debounce';
import {
  PlayIcon,
  PauseIcon,
  FirstIcon,
  LastIcon,
  NextIcon,
  PrevIcon,
} from './MediaIcons';

const getNextPosition = (value, position, targetPosition) => {
  const {lineNumber, column} = position;
  const lines = value.split('\n');
  const prevLine = lines[lineNumber - 2];
  const line = lines[lineNumber - 1];

  let action;
  if (lineNumber < targetPosition.lineNumber) {
    action = 'down';
  } else if (lineNumber > targetPosition.lineNumber) {
    action = 'up';
  } else if (position.isBefore(targetPosition)) {
    action = 'right';
  } else if (targetPosition.isBefore(position)) {
    action = 'left';
  }

  switch (action) {
    case 'left':
      if (column === 1) {
        if (lineNumber !== 1) {
          return {lineNumber: lineNumber - 1, column: prevLine.length + 1};
        }
        return position;
      }
      return {lineNumber, column: column - 1};
    case 'right':
      if (column === line.length + 1) {
        if (lineNumber < lines.length - 1) {
          return {lineNumber: lineNumber + 1, column: 1};
        }
        return position;
      }
      return {lineNumber, column: column + 1};
    case 'up':
      return {lineNumber: lineNumber - 1, column};
    case 'down':
      return {lineNumber: lineNumber + 1, column};
    default:
      return position;
  }
};

const getPositionByIndex = (value, index) => {
  const adjustedIndex = Math.min(index, value.length);
  const beforeCursor = value.slice(0, adjustedIndex);
  const lineNumber = beforeCursor.split('\n').length;
  const lastNewline = beforeCursor.lastIndexOf('\n');
  const prevLinesLength = lastNewline !== '-1' ? lastNewline : 0;
  const column = adjustedIndex - prevLinesLength;
  return new monaco.Position(lineNumber, column);
};

const EMPTY_OBJECT = {};

const LiveEditor = ({values, scope = EMPTY_OBJECT}) => {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [code, setCode] = useState(values[0]);
  const [targetValue, setTargetValue] = useState(values[1]);
  const currentTargetValueIndex = values.indexOf(targetValue);
  const [isPlaying, setIsPlaying] = useState(false);
  const [delay, setDelay] = useState(50);

  const handleChange = useCallback(debounce(setCode, 500), []);

  const updateScrollPosition = useCallback(() => {
    const editor = editorRef.current;
    const {lineNumber} = editorRef.current.getPosition();
    const [{startLineNumber, endLineNumber}] = editor.getVisibleRanges();
    if (lineNumber < startLineNumber) {
      editor.setScrollPosition({
        scrollLeft: 0,
        scrollTop: editor.getTopForLineNumber(lineNumber),
      });
    } else if (lineNumber > endLineNumber) {
      editor.setScrollPosition({
        scrollLeft: 0,
        scrollTop: editor.getTopForLineNumber(lineNumber + 1),
      });
    }
  }, []);

  const movePosition = useCallback(
    (val, currentPosition, targetPosition) => {
      const nextPosition = getNextPosition(
        val,
        currentPosition,
        targetPosition
      );
      editorRef.current.setPosition(nextPosition);
      updateScrollPosition();
    },
    [updateScrollPosition]
  );

  const goto = useCallback(
    target => {
      editorRef.current.focus();
      const currentCodeIndex = currentTargetValueIndex - 1;
      if (currentCodeIndex < 0) {
        throw new Error('that was weird');
      }
      const newCodeIndex =
        target === 'first'
          ? 0
          : target === 'prev'
          ? Math.max(currentCodeIndex - 1, 0)
          : target === 'next'
          ? Math.min(currentCodeIndex + 1, values.length - 1)
          : target === 'last'
          ? values.length - 1
          : null;
      if (newCodeIndex === null) {
        throw new Error('something bad happened!');
      }
      const newTargetCodeIndex = Math.min(newCodeIndex + 1, values.length - 1);
      const cursorPosition = editorRef.current.getPosition();
      editorRef.current.getModel().setValue(values[newCodeIndex]);
      editorRef.current.setPosition(cursorPosition);
      updateScrollPosition();
      setTargetValue(values[newTargetCodeIndex]);
    },
    [values, currentTargetValueIndex, updateScrollPosition]
  );

  const tick = useCallback(() => {
    // TODO: improvements to make
    // * highlight code to be deleted and then delete all at once
    // * ignore whitespace during edits and then run the formatter!? not sure if the diff lib can handle this
    // * if it's faster to get to the target position by going left (and thus up a new line) than it is to go up and then right, choose the quickest path
    const currentValue = editorRef.current.getValue();
    const currentPosition = editorRef.current.getPosition();
    if (targetValue === currentValue) {
      setIsPlaying(false);
      if (currentTargetValueIndex !== values.length - 1) {
        goto('next');
      }
      return;
    }
    const difference = diff(currentValue, targetValue);
    let [[action, chars]] = difference;
    let changeIndex = 0;
    if (action === diff.EQUAL) {
      changeIndex += chars.length;
      [action, chars] = difference[1];
    }
    if (action === diff.DELETE) {
      const deleteIndex = changeIndex + chars.length;
      const targetPosition = getPositionByIndex(currentValue, deleteIndex);
      if (!currentPosition.equals(targetPosition)) {
        movePosition(currentValue, currentPosition, targetPosition);
        return;
      }
      const deletePosition = getPositionByIndex(currentValue, deleteIndex - 1);
      const nextPosition = getPositionByIndex(currentValue, deleteIndex);
      editorRef.current.executeEdits('LiveEditor', [
        {
          text: '',
          range: new monaco.Range(
            deletePosition.lineNumber,
            deletePosition.column,
            nextPosition.lineNumber,
            nextPosition.column
          ),
        },
      ]);
    }
    if (action === diff.INSERT) {
      const targetPosition = getPositionByIndex(currentValue, changeIndex);
      if (!currentPosition.equals(targetPosition)) {
        movePosition(currentValue, currentPosition, targetPosition);
        return;
      }
      editorRef.current.executeEdits('LiveEditor', [
        {
          text: chars[0],
          range: new monaco.Range(
            currentPosition.lineNumber,
            currentPosition.column,
            currentPosition.lineNumber,
            currentPosition.column
          ),
          forceMoveMarkers: true,
        },
      ]);
    }
    updateScrollPosition();
  }, [
    currentTargetValueIndex,
    goto,
    movePosition,
    targetValue,
    values.length,
    updateScrollPosition,
  ]);

  useEffect(() => {
    // TODO: use requestAnimationFrame instead?
    const id = isPlaying ? setInterval(tick, delay) : null;
    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [tick, isPlaying, delay]);

  const resize = useCallback(() => {
    editorRef.current.layout({width: 0, height: 0});
    const {width, height} = editorContainerRef.current.getBoundingClientRect();
    editorRef.current.layout({width, height});
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [resize]);

  return (
    <Split
      sizes={[50, 50]}
      direction="horizontal"
      style={{flexGrow: 1, display: 'flex', flexDirection: 'row'}}
      gutterSize={10}
      onDrag={resize}
      onDragEnd={resize}
    >
      <div
        style={{
          flexGrow: 1,
        }}
      >
        <div
          ref={editorContainerRef}
          style={{
            height: '100%',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Editor
            ref={editorRef}
            defaultValue={values[0]}
            onChange={handleChange}
            scope={scope}
          />
          <div className="diff-player">
            <button
              type="button"
              disabled={currentTargetValueIndex === 1 && code === values[0]}
              onClick={() => goto('first')}
            >
              <FirstIcon />
            </button>
            <button
              type="button"
              disabled={currentTargetValueIndex === 1 && code === values[0]}
              onClick={() => goto('prev')}
            >
              <PrevIcon />
            </button>
            <button
              type="button"
              onClick={() => {
                editorRef.current.focus();
                setIsPlaying(is => {
                  return !is;
                });
              }}
              disabled={
                currentTargetValueIndex === values.length - 1 &&
                code === values[values.length - 1]
              }
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button
              type="button"
              disabled={
                currentTargetValueIndex === values.length - 1 &&
                code === values[values.length - 1]
              }
              onClick={() => goto('next')}
            >
              <NextIcon />
            </button>
            <button
              type="button"
              disabled={
                currentTargetValueIndex === values.length - 1 &&
                code === values[values.length - 1]
              }
              onClick={() => goto('last')}
            >
              <LastIcon />
            </button>
            <input
              type="number"
              min={0}
              step={10}
              max={1000}
              value={1000 - delay}
              onChange={e => setDelay(1000 - e.currentTarget.value)}
            />
          </div>
        </div>
      </div>
      <div style={{flexGrow: 1}}>
        <LiveProvider
          code={code}
          noInline
          disabled
          scope={{...scope, ...React}}
          transformCode={input => {
            try {
              return transform(input, {
                presets: [
                  [
                    presetEnv,
                    {
                      targets: {
                        browsers: ['last 2 Chrome versions'],
                      },
                    },
                  ],
                  presetReact,
                ],
                plugins: [pluginClassProperties],
              }).code;
            } catch (error) {
              return input;
            }
          }}
        >
          <LivePreview />
          <LiveError />
        </LiveProvider>
      </div>
    </Split>
  );
};

export default LiveEditor;
