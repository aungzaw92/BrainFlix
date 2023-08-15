import axios from "axios";

const fetchVideoDetails = async () => {
  try {
    const response = await axios.get("./db/video-details.json");
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const fetchMinifiedVideos = async () => {
  try {
    const response = await axios.get("./db/videos.json");
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default { fetchVideoDetails, fetchMinifiedVideos };
