import { useState, useEffect, useCallback } from "react";
import playIcon from "../../../assets/images/icons/play.svg";
import pauseIcon from "../../../assets/images/icons/pause.svg";
import "./PlayButton.scss";

const PlayButton = ({ handleClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const memoizedHandleClick = useCallback(() => {
    if (handleClick && isPlaying) {
      handleClick();
    }
  }, [handleClick, isPlaying]);

  useEffect(() => {
    memoizedHandleClick();
  }, [memoizedHandleClick]);

  return (
    <button onClick={handleTogglePlay} className="play-button">
      {isPlaying ? (
        <img src={pauseIcon} alt="Pause video" className="play-button__icon" />
      ) : (
        <img
          src={playIcon}
          alt="Play video"
          className="play-button__icon"
        ></img>
      )}
    </button>
  );
};

export default PlayButton;
