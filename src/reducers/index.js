import { combineReducers } from "redux";

const songList = [
  { name: "Uzbek", time: "3:12", author: "Uzim" },
  { name: "Russia", time: "3:11", author: "Sergey" },
  { name: "USA", time: "2:44", author: "Alex" },
  { name: "Kazakh", time: "4:11", author: "Jelsinbay" },
];

const songListReducer = (history = songList, song) => {
  return history;
};

const selectSongReducer = (history = null, selectedSong) => {
  if (selectedSong.type === "SELECTED") {
    return selectedSong.payload;
  }
  return history;
};

const allReducers = combineReducers({
  songList: songListReducer,
  selectedSong: selectSongReducer,
});

export default allReducers;
