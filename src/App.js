import { useState } from "react";
import "./App.scss";

import NavBar from "./components/Component/NavBar/NavBar";
import VideoPlayer from "./components/Component/Video/VideoPlayer";
import Description from "./components/Component/Description/Description";
import CommentSection from "./components/Component/Comment/CommentSection";
import avatarImg from "./assets/images/Mohan-muruge.jpg";
import RecommendedVideos from "./components/Component/Video/RecommendedVideos";
import videoHelpers from "./components/videos";

function App() {
  const [currentVideo, ] = useState({});
  const [videoList, ] = useState([]); 
  const [, setCurrentVideoID] = useState(0); 
  const handleDisplayVideo = (e) => {
    const clickedVideoId = e.target.id;
    setCurrentVideoID(videoHelpers.getVideoIndexById(clickedVideoId, videoList));
  };

  return (
    <>
      <NavBar avatarImg={avatarImg} userName={"User"} />
      <VideoPlayer mediaObject={currentVideo} />
      <main className="page__content">
        <section className="page__main-content">
          <Description mediaObject={currentVideo} />
          {currentVideo.comments ? (
            <CommentSection
              comments={currentVideo.comments}
              avatarImg={avatarImg}
              userName={"User"}
            />
          ) : null}
        </section>
        <aside className="page__side-content">
          <RecommendedVideos
            videos={videoList}
            currentVideo={currentVideo}
            handleClick={handleDisplayVideo}
          />
        </aside>
      </main>
    </>
  );
}

export default App;
