import "./Control.scss";

const Control = ({ playTime, durationTime }) => {
  return (
    <div className="-control">
      <span className="control__track"></span>
      <p className="control__duration">
        {playTime}/{durationTime}
      </p>
    </div>
  );
};

export default Control;
