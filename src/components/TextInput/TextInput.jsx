import React from 'react';

const TextInput = ({ label }) => {
  return (
    <>
      <label role='textlabel' htmlFor='sample'>
        {label}
      </label>
      <input role='textinput' type='text' id='sample' />
    </>
  );
};

export default TextInput;
