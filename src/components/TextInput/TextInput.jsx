import React from 'react';

const TextInput = ({ id, label, onChange, type, placeholder }) => {
  return (
    <>
      {label && (
        <label role='textlabel' htmlFor={id}>
          {label}
        </label>
      )}
      <input
        role='textinput'
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
    </>
  );
};

export default TextInput;
