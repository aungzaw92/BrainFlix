import React from 'react';
import './VideoCard.scss';

const VideoCard = ({ video, handleClick }) => {
  const { title, channel, image, id } = video;
  console.log(image);
  return (
    <div className="video-card" id="id">
      <img
        src={image}
        alt={title}
        className="video-card__image"
        onClick={() => {
          handleClick(id);
        }}
      />
      <span className="video-card__info-container">
        <h3 className="video-card__title">{title}</h3>
        <p className="video-card__channel">{channel}</p>
      </span>
    </div>
  );
};

export default VideoCard;
