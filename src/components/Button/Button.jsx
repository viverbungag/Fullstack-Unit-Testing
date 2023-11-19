import React from 'react';

const Button = ({ disabled, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}
        text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
      `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
