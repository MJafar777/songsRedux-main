import React from "react";
import { connect } from "react-redux";
import { faker } from "@faker-js/faker";

class SongDetail extends React.Component {
  renderDetail() {
    if (this.props.selectedSong) {
      return (
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={`${faker.image.avatar()}`} />
            </div>
            <div className="content">
              <div className="header">
                Music name: {this.props.selectedSong.name}
              </div>
              <div className="meta">
                <a> Music time: {this.props.selectedSong.time}</a>
              </div>
              <div className="description">
                Music author: {this.props.selectedSong.author}
              </div>
            </div>
            <div className="extra content">
              <span className="right floated">Add in 2013</span>
              <span>
                <i className="user icon"></i>
                75 loves
              </span>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Music has not been selected</div>;
    }
  }

  render() {
    console.log(this.props);

    return <div>{this.renderDetail()}</div>;
  }
}
const getMyState = (state) => {
  return state;
};

export default connect(getMyState)(SongDetail);
