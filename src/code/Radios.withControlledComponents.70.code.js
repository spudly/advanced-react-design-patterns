/* eslint-disable no-unused-vars, no-undef */
import React, {
  useState,
  useCallback,
  useMemo,
  useContext,
  createContext,
  forwardRef,
  useImperativeHandle,
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

const Radios = forwardRef(
  ({name, value, defaultValue, children, onChange}, ref) => {
    const isControlled = value !== undefined;
    const [localValue, setLocalValue] = useState(defaultValue);
    const checkedValue = isControlled ? value : localValue;

    const handleChange = useCallback(
      event => {
        const newValue = event.currentTarget.value;
        setCheckedValue(newValue);
        if (onChange) {
          onChange(newValue);
        }
      },
      [onChange]
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
  }
);

render(
  <>
    Controlled:
    <Radios name="something-else-entirely" value="b">
      <label>
        <Radio value="a" /> A
      </label>
      <label>
        <Radio value="b" /> B
      </label>
    </Radios>
    <br />
    Uncontrolled:
    <Radios name="something-else-for-sure" defaultValue="b">
      <label>
        <Radio value="a" /> A
      </label>
      <label>
        <Radio value="b" /> B
      </label>
    </Radios>
  </>
);
