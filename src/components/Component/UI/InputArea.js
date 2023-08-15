import React from "react";
import "./InputArea.scss";

const InputAreaComponent = ({
  inputValue,
  handleInputChange,
  inputPlaceholder,
  inputId,
  inputLabel,
}) => {
  return (
    <>
      <label htmlFor={inputId} className="input-area-component__label">
        {inputLabel}
      </label>
      <textarea
        name={inputId}
        id={inputId}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={handleInputChange}
        className="input-area-component__content"
      ></textarea>
    </>
  );
};

export default InputAreaComponent;
