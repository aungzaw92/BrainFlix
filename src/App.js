// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.scss";
//Import NavBar
//Import VideoPlayer
//Import API Server
//Import Description
//Import Comment Section
//Import Avatar Image
//Import Recommended Videos
//Import Video Helpers

import NavBar from "./components/Component/NavBar/NavBar";
import VideoPlayer from "./components/Component/Video/VideoPlayer";
import apiService from "./components/apiService";
import Description from "./components/Component/Description/Description";
import CommentSection from "./components/Component/Comment/CommentSection";
import avatarImg from "./assets/images/Mohan-muruge.jpg";
import RecommendedVideos from "./components/Component/Video/RecommendedVideos";
import videoHelpers from "./components/videos";

function App() {
  const [video, setVideo] = useState("");
  const [videos, setVideos] = useState("");
  const [currentVideoID, setCurrentVideoID] = useState(0);

  useEffect(() => {
    apiService.getVideos().then((response) => {
      setVideo(response[currentVideoID]);
    });
    apiService.getVideosMinified().then((response) => {
      setVideos(response);
    });
  }, [currentVideoID]);

  const handleDisplayVideo = (e) => {
    setCurrentVideoID(videoHelpers.getVideoIndexById(e.target.id, videos));
  };

  return (
    <>
      <NavBar avatarImg={avatarImg} userName={"User"} />
      <VideoPlayer mediaObject={video} />
      <main className="page__content">
        <section className="page__main-content">
          <Description mediaObject={video} />
          {video.comments ? (
            <CommentSection
              comments={video.comments}
              avatarImg={avatarImg}
              userName={"User"}
            />
          ) : null}
        </section>
        <aside className="page__side-content">
          <RecommendedVideos
            videos={videos}
            currentVideo={video}
            handleClick={handleDisplayVideo}
          />
        </aside>
      </main>
    </>
  );
}

export default App;
