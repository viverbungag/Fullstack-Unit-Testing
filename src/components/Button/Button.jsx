import React from 'react';

const Button = ({ disabled, children, onClick }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
