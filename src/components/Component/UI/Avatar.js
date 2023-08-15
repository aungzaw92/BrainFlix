import React from "react";
import "./Avatar.scss";

const AvatarComponent = ({ avatarSource, userName }) => {
  return (
    <div className="avatar-component__container">
      {avatarSource ? (
        <img
          src={avatarSource}
          alt={userName}
          className="avatar-component__image"
        />
      ) : (
        <div className="avatar-component__placeholder"></div>
      )}
    </div>
  );
};

export default AvatarComponent;
