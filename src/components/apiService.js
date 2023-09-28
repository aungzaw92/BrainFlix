import axios from 'axios';
console.log(axios.isCancel('something'));

const config = {
  headers: {
    'x-api-key': process.env.REACT_APP_BACKEND_URL,
  },
};

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const getVideos = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/videos`, config);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const getVideo = async (id) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/videos/${id}`, config);
    console.log('Hello World', response);

    return response.data;
  } catch (error) {
    console.error('Error response status:', error.response.status);
    console.error('Error response data:', error.response.data);
    return undefined;
  }
};

const postVideo = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/videos/`,
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
      `${BACKEND_URL}/videos/${id}/comments`,
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
