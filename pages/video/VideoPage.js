import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import VideoPlayer from "../../components/Component/Video/VideoPlayer";
import apiService from "../../components/apiService";
import Description from "../../components/Component/Description/Description";
import CommentSection from "../../components/Component/Comment/CommentSection";
import RecommendedVideos from "../../components/Component/Video/RecommendedVideos";

import "./VideoPage.scss";

const VideoPage = () => {
  const [video, setVideo] = useState({});
  const [videos, setVideos] = useState([]); // Initialize as an empty array
  const params = useParams();
  const { state } = useLocation();

  useEffect(() => {
    if (params?.id) {
      apiService.getVideo(params.id).then((response) => {
        setVideo(response);
      });
    } else if (!params?.id && videos.length && !video) {
      // Check for videos.length
      apiService.getVideo(videos[0].id).then((response) => {
        setVideo(response);
      });
    }
  }, [videos, params?.id]);

  useEffect(() => {
    if (state?.videos) {
      setVideos(state.videos);
    } else {
      apiService.getVideos().then((response) => {
        setVideos(response || []); // Ensure that the response is an array
      });
    }
  }, [state?.videos]);

  const handleNewComment = async (text) => {
    const comment = {
      name: "User",
      comment: text,
      timestamp: new Date(),
    };

    // Optimistically update the UI
    setVideo((prevVideo) => ({
      ...prevVideo,
      comments: prevVideo.comments
        ? [...prevVideo.comments, comment]
        : [comment],
    }));

    try {
      // Send the request to post the comment
      const response = await apiService.postComment(video.id, {
        name: "User",
        comment: text,
      });

      if (response) {
        // Comment was successfully posted
        const updatedVideo = await apiService.getVideo(video.id);
        setVideo(updatedVideo);
      } else {
        // Revert the UI changes if the request fails
        setVideo((prevVideo) => ({
          ...prevVideo,
          comments: prevVideo.comments.filter((c) => c !== comment),
        }));
      }
    } catch (error) {
      // Handle errors here
      console.error("Error posting comment:", error);
      // Revert the UI changes if an error occurs
      setVideo((prevVideo) => ({
        ...prevVideo,
        comments: prevVideo.comments.filter((c) => c !== comment),
      }));
    }
  };

  return (
    <>
      <VideoPlayer mediaObject={video} />
      <main className="video-page__content">
        <section className="video-page__main-content">
          <Description mediaObject={video} />
          {video.comments ? (
            <CommentSection
              comments={video.comments}
              avatarImg={`${process.env.REACT_APP_API_URL}/public/Mohan-muruge.jpg`}
              userName={"User"}
              handleNewComment={handleNewComment}
            />
          ) : null}
        </section>
        <aside className="video-page__side-content">
          <RecommendedVideos videos={videos} currentVideo={video} />
        </aside>
      </main>
    </>
  );
};

export default VideoPage;
