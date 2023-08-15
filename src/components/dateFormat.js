const getFormattedDate = (timestamp) => {
  const date = new Date(timestamp);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (Number(day) < 10) {
    day = `0${day}`;
  }

  if (Number(month) < 10) {
    month = `0${month}`;
  }

  return `${month}/${day}/${year}`;
};

export default { getFormattedDate };
