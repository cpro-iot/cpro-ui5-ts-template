import React from 'react';

// Define a basic Button component
const Button = ({ text, color, onClick }) => {
  const buttonStyle = {
    backgroundColor: color || 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;