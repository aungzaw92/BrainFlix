import axios from "axios";

const getVideos = async () => {
  try {
    const response = await axios.get("./data/video-details.json");
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const getVideosMinified = async () => {
  try {
    const response = await axios.get("./data/videos.json");
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default { getVideos, getVideosMinified };
