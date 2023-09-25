import axios from "axios";
console.log(axios.isCancel("something"));

const config = {
  headers: {
    "x-api-key": process.env.REACT_APP_API_KEY,
  },
};

const API_URL = process.env.REACT_APP_API_URL;
// const API_KEY = process.env.REACT_APP_API_KEY;

const getVideos = async () => {
  try {
    const response = await axios.get(`${API_URL}/videos`, config);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const getVideo = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/videos/${id}`, config);

    return response.data;
  } catch (error) {
    console.error("Error response status:", error.response.status);
    console.error("Error response data:", error.response.data);
    return undefined;
  }
};

const postVideo = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/videos/`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const postComment = async (id, comment) => {
  try {
    const response = await axios.post(
      `${API_URL}/videos/${id}/comments`,
      comment,
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const apiService = { getVideos, getVideo, postComment, postVideo };
export default apiService;
