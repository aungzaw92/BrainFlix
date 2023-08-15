import React from "react";
import "./InputBox.scss";

const InputBoxComponent = ({
  inputValue,
  handleInputChange,
  inputPlaceholder,
  iconSource,
  inputId,
  inputLabel,
}) => {
  return (
    <>
      {inputLabel ? (
        <label htmlFor={inputId} className="input-box-component__label">
          {inputLabel}
        </label>
      ) : null}
      <span className="input-box-component">
        {iconSource ? (
          <img src={iconSource} className="input-box-component__icon"></img>
        ) : null}
        <input
          id={inputId}
          type="text"
          placeholder={inputPlaceholder}
          value={inputValue}
          onChange={handleInputChange}
          className="input-box-component__text-field"
        />
      </span>
    </>
  );
};

export default InputBoxComponent;
