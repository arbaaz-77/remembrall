import React from "react";

const Button = ({ text, handleAdd }) => {
  return (
    <button onClick={handleAdd} className="btn">
      {text}
    </button>
  );
};

export default Button;
