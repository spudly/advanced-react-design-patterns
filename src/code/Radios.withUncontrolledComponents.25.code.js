import React, {
  useState,
  useCallback,
  useMemo,
  useContext,
  createContext,
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

const Radios = ({name, children, onChange}) => {
  const [checkedValue, setCheckedValue] = useState(null);

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

  return (
    <RadiosContext.Provider value={contextValue}>
      {children}
    </RadiosContext.Provider>
  );
};

render(
  <Radios name="something-else-entirely" defaultValue="b">
    <label>
      <Radio value="a" /> A
    </label>
    <label>
      <Radio value="b" /> B
    </label>
  </Radios>
);
