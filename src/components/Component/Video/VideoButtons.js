import { useEffect, useState } from "react";
import closeFullscreenSrc from "../../../assets/images/icons/close_fullscreen.svg";
import openFullscreenSrc from "../../../assets/images/icons/fullscreen.svg";
import muteVolumeSrc from "../../../assets/images/icons/volume_off.svg";
import unmuteVolumeSrc from "../../../assets/images/icons/volume_up.svg";

import "./VideoButtons.scss";

const VideoButtons = ({ handleSizeChange, handleVolumeChange }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleToggleMuted = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (handleSizeChange && isFullscreen) {
      handleSizeChange();
    }
    if (handleVolumeChange && isMuted) {
      handleVolumeChange();
    }
  }, [isFullscreen, isMuted]);

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
      <button onClick={handleToggleMuted} className="video-buttons__button">
        {isMuted ? (
          <img src={muteVolumeSrc} alt="Mute" className="video-buttons__icon" />
        ) : (
          <img
            src={unmuteVolumeSrc}
            alt="Unmute"
            className="video-buttons__icon"
          />
        )}
      </button>
    </div>
  );
};

export default VideoButtons;
