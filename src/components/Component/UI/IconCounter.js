import React from "react";
import "./IconCounter.scss";

const IconCounterComponent = ({ iconSource, altText, counter }) => {
  return (
    <div className="icon-counter-component">
      <img
        src={iconSource}
        alt={altText}
        className="icon-counter-component__icon"
      />
      <p className="icon-counter-component__count">{counter}</p>
    </div>
  );
};

export default IconCounterComponent;
