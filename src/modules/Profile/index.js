import React from "react";
import "./style.scss";
import profilepic from "../../assets/me.png";

class Homepage extends React.Component {
  render() {
    return (
      <div className="profile">
        <div className="profile__wrapper ">
          <a href="/">
            <img src={profilepic} alt="Link to home" />
          </a>
        </div>
      </div>
    );
  }
}

export default Homepage;
