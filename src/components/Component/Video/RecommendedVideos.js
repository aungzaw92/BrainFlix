import VideoCard from "./VideoCard";
import "./RecommendedVideos.scss";
const RecommendedVideos = ({ videos, currentVideo, handleClick }) => {
  return (
    <section className="recommended">
      <h2 className="recommended__heading">Next Videos</h2>
      {videos
        ? videos.map((video) => {
            if (video.id !== currentVideo.id) {
              return (
                <VideoCard
                  key={video.id}
                  video={video}
                  handleClick={handleClick}
                />
              );
            }
          })
        : null}
    </section>
  );
};
export default RecommendedVideos;
