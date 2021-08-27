import React, { useState } from 'react';

const Input = ({ placeholder, type, name, getState, id }) => {
  const [value, setValue] = useState('');

  const inputValue = (input) => {
    setValue(input);
    getState(input);
  };

  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => inputValue(e.target.value)}
        id={id}
        maxLength="255"
        className="input-field"
      />
    </>
  );
};

export default Input;