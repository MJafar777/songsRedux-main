import { render } from "@testing-library/react";
import React from "react";
import { connect } from "react-redux";
import selectSong from "../actions";


const SongList = (props) => {
  const renderList = () => {
    return props.songList.map((val) => {
      return (
        <div className="card" key={val.name}>
          <div className="content">
            <img
              className="right floated mini ui image"
              src="https://media.istockphoto.com/vectors/music-note-icon-vector-illustration-vector-id1175435360?k=20&m=1175435360&s=612x612&w=0&h=1yoTgUwobvdFlNxUQtB7_NnWOUD83XOMZHvxUzkOJJs="
            />
            <div className="header">Music Name: {val.name}</div>
            <div className="meta">Music time: {val.time}</div>
            <div className="description">Music author: {val.author}</div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div
                onClick={() => {
                  props.selectSong(val);
                }}
                className="ui basic green button"
              >
                Select
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <div className="ui cards">{renderList()}</div>
    </div>
  );
};

const getMyState = (data) => {
  console.log(data);
  return data;
};

export default connect(getMyState, {
  selectSong,
})(SongList);
