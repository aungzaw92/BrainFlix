import "./InputBox.scss";

const InputBoxComponent = ({
  inputValue,
  handleInputChange,
  inputPlaceholder,
  iconSource,
  inputId,
  inputLabel,
  iconAlt,
  customRef, // Add a prop for the alt text of the icon
}) => {
  return (
    <span className="input">
      {inputLabel ? (
        <label htmlFor={inputId} className="input__label">
          {inputLabel}
        </label>
      ) : null}
      <span className="input__container">
        {iconSource ? (
          <img src={iconSource} className="input__icon"></img>
        ) : null}
        <input
          id={inputId}
          type="text"
          placeholder={inputPlaceholder}
          value={inputValue}
          onChange={handleInputChange}
          className="input__text-field"
          ref={customRef}
        />
      </span>
    </span>
  );
};

export default InputBoxComponent;
