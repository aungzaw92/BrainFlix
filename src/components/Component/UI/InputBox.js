import React from "react";
import "./InputBox.scss";

const InputBoxComponent = ({
  inputValue,
  handleInputChange,
  inputPlaceholder,
  iconSource,
  inputId,
  inputLabel,
  iconAlt, // Add a prop for the alt text of the icon
}) => {
  return (
    <>
      {inputLabel ? (
        <label htmlFor={inputId} className="input__label">
          {inputLabel}
        </label>
      ) : null}
      <span className="input">
        {iconSource ? (
          <img
            src={iconSource}
            alt={iconAlt} // Use the alt text prop here
            className="input_icon"
          />
        ) : null}
        <input
          id={inputId}
          type="text"
          placeholder={inputPlaceholder}
          value={inputValue}
          onChange={handleInputChange}
          className="input__text-field"
        />
      </span>
    </>
  );
};

export default InputBoxComponent;
