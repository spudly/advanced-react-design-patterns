/* eslint-disable no-unused-vars */
import React, {useState, cloneElement, createContext, useContext} from 'react';
import {render} from 'react-dom';

// start
const RadiosContext = createContext(null);

const Radio = ({value}) => {
  const {name, checkedValue, onChange} = useContext(RadiosContext);
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

  const handleChange = event => {
    const newValue = event.currentTarget.value;
    setCheckedValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const contextValue = {name, checkedValue, onChange: handleChange};

  return React.Children.map(children, child =>
    cloneElement(child, {
      name,
      checkedValue,
      onChange: handleChange,
    })
  );
};

render(
  <Radios name="something-else-entirely">
    <label>
      <Radio value="a" /> A
    </label>
    <label>
      <Radio value="b" /> B
    </label>
  </Radios>
);
