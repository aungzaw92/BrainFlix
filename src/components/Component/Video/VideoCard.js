import React from "react";
import "./VideoCard.scss";

const VideoCard = ({ videoInfo, handleClick }) => {
  const { title, channel, image, id } = videoInfo;

  return (
    <div className="video-card">
      <img
        src={image}
        alt={title}
        className="video-card__image"
        onClick={handleClick}
        id={id}
      />
      <span className="video-card__info-container">
        <h3 className="video-card__title">{title}</h3>
        <p className="video-card__channel">{channel}</p>
      </span>
    </div>
  );
};

export default VideoCard;
