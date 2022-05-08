const selectSong = (obj) => {
  return { type: "SELECTED", payload: obj };
};

export default selectSong;
