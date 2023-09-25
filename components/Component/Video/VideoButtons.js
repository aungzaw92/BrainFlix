import { useEffect, useState, useCallback } from "react";
import closeFullscreenSrc from "../../../assets/images/icons/close_fullscreen.svg";
import openFullscreenSrc from "../../../assets/images/icons/fullscreen.svg";

import "./VideoButtons.scss";

const VideoButtons = ({ handleSizeChange, handleVolumeChange }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const memoizedHandleSizeChange = useCallback(handleSizeChange, [
    handleSizeChange,
  ]);
  const memoizedHandleVolumeChange = useCallback(handleVolumeChange, [
    handleVolumeChange,
  ]);

  useEffect(() => {
    if (memoizedHandleSizeChange && isFullscreen) {
      memoizedHandleSizeChange();
    }
    if (memoizedHandleVolumeChange) {
      memoizedHandleVolumeChange();
    }
  }, [isFullscreen, memoizedHandleSizeChange, memoizedHandleVolumeChange]);

  return (
    <div className="video-buttons">
      <button
        onClick={handleToggleFullscreen}
        className="video-buttons__button"
      >
        {isFullscreen ? (
          <img
            src={openFullscreenSrc}
            alt="Open Fullscreen"
            className="video-buttons__icon"
          />
        ) : (
          <img
            src={closeFullscreenSrc}
            alt="Close Fullscreen"
            className="video-buttons__icon"
          />
        )}
      </button>
    </div>
  );
};

export default VideoButtons;
