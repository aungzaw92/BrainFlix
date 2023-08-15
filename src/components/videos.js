const findVideoIndexById = (targetId, videoList) => {
  for (let i = 0; i < videoList.length; i++) {
    if (videoList[i].id === targetId) {
      return i;
    }
  }
  return -1;
};

export default { findVideoIndexById };
