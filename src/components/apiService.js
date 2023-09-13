import axios from "axios";
console.log(axios.isCancel("something"));

const config = {
  params: {
    api_key: "d1a1d8c2-23d3-4531-b943-200991a86691",
  },
};

const getVideos = async () => {
  try {
    const response = await axios.get(
      "https://project-2-api.herokuapp.com/videos",
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const getVideo = async (id) => {
  try {
    const response = await axios.get(
      `https://project-2-api.herokuapp.com/videos/${id}`,
      config
    );
    // const { name, description, likes, views } = response.data;

    // return { name, description, likes, views };
    return response.data;
  } catch (error) {
    console.error("Error response status:", error.response.status);
    console.error("Error response data:", error.response.data);
    return undefined;
  }
};

const postComment = async (id, comment) => {
  try {
    const response = await axios.post(
      `https://project-2-api.herokuapp.com/videos/${id}/comments`,
      comment,
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default { getVideos, getVideo, postComment };
