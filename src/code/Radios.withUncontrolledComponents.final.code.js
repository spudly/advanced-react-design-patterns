import React, {
  useState,
  useCallback,
  useMemo,
  useContext,
  createContext,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import {render} from 'react-dom';

// start
const RadiosContext = createContext(null);

const useRadioContext = () => {
  const context = useContext(RadiosContext);
  if (context == null) {
    throw new Error('Missing Radio Context');
  }
  return context;
};

const Radio = ({value}) => {
  const {name, checkedValue, onChange} = useRadioContext();
  return (
    <input
      type="radio"
      name={name}
      value={value}
      checked={value === checkedValue}
      onChange={onChange}
    />
  );
};

const Radios = forwardRef(({name, defaultValue, children, onChange}, ref) => {
  const [checkedValue, setCheckedValue] = useState(defaultValue);

  const handleChange = useCallback(
    event => {
      const newValue = event.currentTarget.value;
      setCheckedValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    },
    [setCheckedValue, onChange]
  );

  const contextValue = useMemo(
    () => ({name, checkedValue, onChange: handleChange}),
    [name, checkedValue, handleChange]
  );

  useImperativeHandle(
    ref,
    () => ({
      value: checkedValue,
      setValue: setCheckedValue,
    }),
    [checkedValue]
  );

  return (
    <RadiosContext.Provider value={contextValue}>
      {children}
    </RadiosContext.Provider>
  );
});

const RadiosDemo = () => {
  const apiRef = useRef(null);
  return (
    <>
      <Radios name="something-else-entirely" defaultValue="b" ref={apiRef}>
        <label>
          <Radio value="a" /> A
        </label>
        <label>
          <Radio value="b" /> B
        </label>
      </Radios>
      <br />
      <button onClick={() => alert(`Current Value: ${apiRef.current.value}`)}>
        Alert Current Value
      </button>
    </>
  );
};

render(<RadiosDemo />);
