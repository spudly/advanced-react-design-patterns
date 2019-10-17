import React, {forwardRef, useContext} from 'react';
import ThemeContext from '../utils/ThemeContext';
import MonacoEditor from 'react-monaco-editor';

const Editor = forwardRef(({defaultValue, onChange}, ref) => {
  const {theme} = useContext(ThemeContext);
  return (
    <MonacoEditor
      language="javascript"
      theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
      options={{
        minimap: {
          enabled: false,
        },
        formatOnType: true,
        showFoldingControls: 'always',
        wordWrap: 'on',
        wrappingIndent: 'deepIndent',
      }}
      defaultValue={defaultValue}
      onChange={onChange}
      // eslint-disable-next-line no-param-reassign
      editorDidMount={editor => (ref.current = editor)}
    />
  );
});

export default Editor;
