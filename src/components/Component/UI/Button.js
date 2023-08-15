import React from "react";
import "./Button.scss";

const ButtonComponent = ({ iconSource, buttonText, handleClick }) => {
  return (
    <button onClick={handleClick} className="button-component">
      <img
        src={iconSource}
        alt={buttonText}
        className="button-component__icon"
      />
      <p className="button-component__text"> {buttonText}</p>
    </button>
  );
};

export default ButtonComponent;
