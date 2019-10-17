import React, {useState, cloneElement} from 'react';
import {render} from 'react-dom';

// start
const Radio = ({children, name, value, checkedValue, onChange}) => (
  <label key={value}>
    <input
      type="radio"
      name={name}
      value={value}
      checked={value === checkedValue}
      onChange={onChange}
    />{' '}
    {children}
  </label>
);

const Radios = ({name, children, onChange}) => {
  const [checkedValue, setCheckedValue] = useState(null);

  const handleChange = event => {
    const newValue = event.currentTarget.value;
    setCheckedValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

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
