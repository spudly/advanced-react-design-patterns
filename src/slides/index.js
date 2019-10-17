import React from 'react';
import Assumptions from './Assumptions';
import Assumptions2 from './Assumptions2';
import Why from './Why';
import Why2 from './Why2';
import Why3 from './Why3';
import Why4 from './Why4';
import Why5 from './Why5';
import Why6 from './Why6';
import formatTime from '../utils/formatTime';
import AboutMe from './AboutMe';
import TheEnd from './TheEnd';
import Slide from '../widgets/Slide';
import LiveEditor from '../widgets/LiveEditor';
import Diff from '../widgets/Diff';
import audioPlayerCode from '../code/AudioPlayer.code';
import audioPlayerCodeWithPresentationComponents50 from '../code/AudioPlayer.withPresentationComponents.50.code';
import audioPlayerCodeWithPresentationComponents55 from '../code/AudioPlayer.withPresentationComponents.55.code';
import audioPlayerCodeWithPresentationComponents57 from '../code/AudioPlayer.withPresentationComponents.57.code';
import audioPlayerCodeWithPresentationComponents60 from '../code/AudioPlayer.withPresentationComponents.60.code';
import audioPlayerCodeWithPresentationComponentsFinal from '../code/AudioPlayer.withPresentationComponents.final.code';
import audioPlayerCodeWithHigherOrderComponents from '../code/AudioPlayer.withHigherOrderComponent.code';
import audioPlayerCodeWithRenderProps80 from '../code/AudioPlayer.withRenderProps.80.code';
import audioPlayerCodeWithRenderProps90 from '../code/AudioPlayer.withRenderProps.90.code';
import audioPlayerCodeWithRenderPropsFinal from '../code/AudioPlayer.withRenderProps.final.code';
import audioPlayerCodeWithPropCollections from '../code/AudioPlayer.withPropCollections.code';
import audioPlayerCodeWithHooks from '../code/AudioPlayer.withHooks.code';
import radiosCode from '../code/Radios.code';
import radiosCodeNotImplemented from '../code/Radios.notImplemented.code';
import radiosCodeWithCompoundComponents50 from '../code/Radios.withCompoundComponents.50.code';
import radiosCodeWithCompoundComponentsFinal from '../code/Radios.withCompoundComponents.final.code';
import radiosCodeWithControlledComponents50 from '../code/Radios.withControlledComponents.50.code';
import radiosCodeWithControlledComponents60 from '../code/Radios.withControlledComponents.60.code';
import radiosCodeWithControlledComponents70 from '../code/Radios.withControlledComponents.70.code';
import radiosCodeWithControlledComponentsFinal from '../code/Radios.withControlledComponents.final.code';
import radiosCodeWithNestedCompoundComponents50 from '../code/Radios.withNestedCompoundComponents.50.code';
import radiosCodeWithNestedCompoundComponents75 from '../code/Radios.withNestedCompoundComponents.75.code';
import radiosCodeWithNestedCompoundComponents80 from '../code/Radios.withNestedCompoundComponents.80.code';
import radiosCodeWithNestedCompoundComponents82 from '../code/Radios.withNestedCompoundComponents.82.code';
import radiosCodeWithNestedCompoundComponents85 from '../code/Radios.withNestedCompoundComponents.85.code';
import radiosCodeWithNestedCompoundComponentsFinal from '../code/Radios.withNestedCompoundComponents.final.code';
import radiosCodeWithUncontrolledComponents25 from '../code/Radios.withUncontrolledComponents.25.code';
import radiosCodeWithUncontrolledComponents50 from '../code/Radios.withUncontrolledComponents.50.code';
import radiosCodeWithUncontrolledComponents75 from '../code/Radios.withUncontrolledComponents.75.code';
import radiosCodeWithUncontrolledComponentsFinal from '../code/Radios.withUncontrolledComponents.final.code';
import radiosCodeWithValidatedContextConsumers25 from '../code/Radios.withValidatedContextConsumers.25.code';
import radiosCodeWithValidatedContextConsumers50 from '../code/Radios.withValidatedContextConsumers.50.code';
import radiosCodeWithValidatedContextConsumersFinal from '../code/Radios.withValidatedContextConsumers.final.code';
import Catch from '../widgets/Catch';
import Agenda from './Agenda';
import PresentationComponents from './PresentationComponents';
import ContainerComponents from './ContainerComponents';
import HigherOrderComponents from './HigherOrderComponents';
import RenderProps from './RenderProps';
import PropCollections from './PropCollections';
import PropCollectionGetters from './PropCollectionGetters';
import CompoundComponents from './CompoundComponents';
import NestedCompoundComponents from './NestedCompoundComponents';
import ValidatedContextConsumers from './ValidatedContextConsumers';
import UncontrolledComponents from './UncontrolledComponents';
import StateInitializers from './StateInitializers';
import ControlledComponents from './ControlledComponents';
import Hooks from './Hooks';
import {PlayIcon, StopIcon, PauseIcon} from '../widgets/MediaIcons';
import Takeaways from './Takeaways';
import Takeaways2 from './Takeaways2';
import Takeaways3 from './Takeaways3';
import Takeaways4 from './Takeaways4';
import Takeaways5 from './Takeaways5';
import Takeaways6 from './Takeaways6';
import Takeaways7 from './Takeaways7';
import AdvancedReactDesignPatterns from './AdvancedReactDesignPatterns';

const REGEX_START = /^.*\/\/ start\n/s;
const REGEX_END = /\n\/\/ end\n.*$/s;
const REGEX_RENDER_END = /\nrender\(.*$/s;

const cleanCodeForEditor = code =>
  code
    .replace(REGEX_START, '')
    .replace(REGEX_END, '')
    .trim();

const cleanCodeForDiff = code =>
  code
    .replace(REGEX_START, '')
    .replace(REGEX_RENDER_END, '')
    .trim();

const makeEditorSlide = (title, task, codes) => {
  const values = codes.map(cleanCodeForEditor);
  const EditorSlide = () => {
    // const [cheat, setCheat] = useState(false);
    return (
      <Slide
        title={`<${title.replace(/ /g, '')} dev />`}
        subtitle={task ? `Task: ${task}` : ''}
      >
        <LiveEditor
          values={values}
          scope={{formatTime, Catch, PlayIcon, StopIcon, PauseIcon}}
        />
      </Slide>
    );
  };
  EditorSlide.displayName = `${title}:LiveCoding`;
  return EditorSlide;
};

const makeDiffSlide = (title, before, after) => {
  const DiffSlide = () => (
    <Slide title={`<${title.replace(/ /g, '')} codeReview />`}>
      <Diff a={cleanCodeForDiff(before)} b={cleanCodeForDiff(after)} />
    </Slide>
  );
  DiffSlide.displayName = `${title}:Recap`;
  return DiffSlide;
};

const makePatternSlides = (title, task, codes) => {
  const EditorSlide = makeEditorSlide(title, task, codes);
  const DiffSlide = makeDiffSlide(title, codes[0], codes[codes.length - 1]);
  return [EditorSlide, DiffSlide];
};

const slides = [
  AdvancedReactDesignPatterns,
  AboutMe,
  Assumptions,
  Assumptions2,
  Why,
  Why2,
  Why3,
  Why4,
  Why5,
  Why6,
  Agenda,
  PresentationComponents,
  ContainerComponents,
  ...makePatternSlides(
    'ContainerComponents',
    'Make controls reusable by splitting into 2 components: AudioPlayerContainer & AudioPlayerControls',
    [
      audioPlayerCode,
      audioPlayerCodeWithPresentationComponents50,
      audioPlayerCodeWithPresentationComponents55,
      audioPlayerCodeWithPresentationComponents57,
      audioPlayerCodeWithPresentationComponents60,
      audioPlayerCodeWithPresentationComponentsFinal,
    ]
  ),
  HigherOrderComponents,
  ...makePatternSlides(
    'Higher-Order Components',
    'Make business logic reusable by creating a higher-order component',
    [
      audioPlayerCodeWithPresentationComponentsFinal,
      audioPlayerCodeWithHigherOrderComponents,
    ]
  ),
  RenderProps,
  ...makePatternSlides(
    'Render Props',
    'Allow consumer to determine what the controls look like using render props',
    [
      audioPlayerCodeWithHigherOrderComponents,
      audioPlayerCodeWithRenderProps80,
      audioPlayerCodeWithRenderProps90,
      audioPlayerCodeWithRenderPropsFinal,
    ]
  ),
  PropCollections,
  PropCollectionGetters,
  ...makePatternSlides(
    'Prop Collections',
    'Improve API using prop collections',
    [audioPlayerCodeWithRenderPropsFinal, audioPlayerCodeWithPropCollections]
  ),
  Hooks,
  ...makePatternSlides('Hooks', 'useHooks()', [
    audioPlayerCodeWithPropCollections,
    audioPlayerCodeWithHooks,
  ]),
  makeEditorSlide(
    'Radios',
    'Implement the Radios component to aggregate radio button elements',
    [radiosCodeNotImplemented, radiosCode]
  ),
  CompoundComponents,
  ...makePatternSlides(
    'Compound Components',
    'Use compound components to provide a more react-ish API',
    [
      radiosCode,
      radiosCodeWithCompoundComponents50,
      radiosCodeWithCompoundComponentsFinal,
    ]
  ),
  NestedCompoundComponents,
  ...makePatternSlides(
    'Nested Compound Components',
    "Use React's context API to allow <Radio /> elements to be nested inside other elements",
    [
      radiosCodeWithCompoundComponentsFinal,
      radiosCodeWithNestedCompoundComponents50,
      radiosCodeWithNestedCompoundComponents75,
      radiosCodeWithNestedCompoundComponents80,
      radiosCodeWithNestedCompoundComponents82,
      radiosCodeWithNestedCompoundComponents85,
      radiosCodeWithNestedCompoundComponentsFinal,
    ]
  ),
  ValidatedContextConsumers,
  ...makePatternSlides(
    'Validated Context Consumers',
    'Ensure that RadiosContext consumers are descended from a RadiosContext provider',
    [
      radiosCodeWithNestedCompoundComponentsFinal,
      radiosCodeWithValidatedContextConsumers25,
      radiosCodeWithValidatedContextConsumers50,
      radiosCodeWithValidatedContextConsumersFinal,
    ]
  ),
  UncontrolledComponents,
  StateInitializers,
  ...makePatternSlides(
    'Uncontrolled Components',
    'Provide a state initializer (defaultValue) and an imperative API (value, setValue)',
    [
      radiosCodeWithValidatedContextConsumersFinal,
      radiosCodeWithUncontrolledComponents25,
      radiosCodeWithUncontrolledComponents50,
      radiosCodeWithUncontrolledComponents75,
      radiosCodeWithUncontrolledComponentsFinal,
    ]
  ),
  ControlledComponents,
  ...makePatternSlides(
    'ControlledComponents',
    'Provide a declarative API (value)',
    [
      radiosCodeWithUncontrolledComponentsFinal,
      radiosCodeWithControlledComponents50,
      radiosCodeWithControlledComponents60,
      radiosCodeWithControlledComponents70,
      radiosCodeWithControlledComponentsFinal,
    ]
  ),
  Takeaways,
  Takeaways2,
  Takeaways3,
  Takeaways4,
  Takeaways5,
  Takeaways6,
  Takeaways7,
  TheEnd,
];

const seen = [];
for (const slide of slides) {
  if (!slide.displayName) {
    throw new Error('All slides must have a displayName');
  }
  if (seen.includes(slide.displayName)) {
    throw new Error(`Duplicate slide displayName: ${slide.displayName}`);
  }
  seen.push(slide.displayName);
}

export default slides;
