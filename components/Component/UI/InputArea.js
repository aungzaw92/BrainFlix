import "./InputArea.scss";

const InputAreaComponent = ({
  inputValue,
  handleInputChange,
  inputPlaceholder,
  inputId,
  inputLabel,
  customRef
}) => {
  return (
    <span className="input-area">
      <label htmlFor={inputId} className="input-area__label">
        {inputLabel}
      </label>
      <textarea
        name={inputId}
        id={inputId}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={handleInputChange}
        className="input-area__content"
        ref={customRef}
      ></textarea>
    </span>
  );
};

export default InputAreaComponent;
