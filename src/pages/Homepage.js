import React from "react";

import profilepic from "../assets/profile-pic.jpg";
import Sidenav from "../modules/Sidenav";

import "../Homepage.scss";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage__wrapper">
        <div className="row">
          <div className="col-xs-12 col-sm-3">
            <Sidenav />
          </div>
          <div className="col-xs-12 col-sm-9">
            <h1>Nicole Jesudason</h1>
            <h2>WEB DEVELOPER</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
