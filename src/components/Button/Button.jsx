import React from "react";

const Button = (props) => {
  const className = !props.className ? 'button_dark' : 'button_primary'
  return (
    <button
      className={className}
      id={props.id}
      value={props.value}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default Button;
