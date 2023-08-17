import VideoButtons from "./VideoButtons";
import PlayButton from "./PlayButton";
import Control from "./Control";
import "./VideoPlayer.scss";

const VideoPlayer = ({ mediaObject }) => {
  const { video, image, duration } = mediaObject;

  return (
    <section className="video">
      <div className="video__container">
        <video className="video__content" poster={image}></video>
        <source src={video} />
        <div className="video__controls">
          <PlayButton />
          <Control playTime={"0:00"} durationTime={duration} />
          <VideoButtons />
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
