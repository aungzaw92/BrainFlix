const findVideoIndexById = (id, videos) => {
  for (let i = 0; i < videos.length; i++) {
    if (videos[i].id === id) {
      return i;
    }
  }
  return -1;
};

export default findVideoIndexById;
