import React, {useState} from 'react';
import {render} from 'react-dom';

/* eslint-disable react/jsx-no-undef */

// start
const Radios = ({name, options, onChange}) => {
  const [checkedValue, setCheckedValue] = useState(null);

  const handleChange = event => {
    const newValue = event.currentTarget.value;
    setCheckedValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return options.map(option => (
    <label key={option.value}>
      <input
        type="radio"
        name={name}
        value={option.value}
        checked={option.value === checkedValue}
        onChange={handleChange}
      />{' '}
      {option.label}
    </label>
  ));
};

render(
  <Radios name="something-else">
    <Radio value="a">A</Radio>
    <Radio value="b">B</Radio>
  </Radios>
);
