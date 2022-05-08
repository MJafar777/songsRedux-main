import React from "react";
import Header from "./Header";
import SongDetail from "./SongDetail";
import SongList from "./SongList";
const a = 3;
console.log(a);
const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <Header />
      <div className="ui grid" style={{ marginTop: "10px" }}>
        <div className="six wide column ">
          <SongList />
        </div>
        <div className="six wide column ">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
