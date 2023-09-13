import { useNavigate } from "react-router-dom";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.scss";

const RecommendedVideos = ({ videos, currentVideo, handleClick }) => {
  const navigate = useNavigate();
  const handleGoToVideoPage = (id) => {
    navigate(`../${id}`, { state: { videos } });
  };
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
                  handleClick={handleGoToVideoPage}
                />
              );
            }
            return null;
          })
        : null}
    </section>
  );
};

export default RecommendedVideos;
