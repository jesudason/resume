import React from "react";
import Profile from "../Profile";
import "./style.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { CgMenu } from "react-icons/cg";

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }
  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <div className={isMenuOpen ? "side-nav side-nav--open" : "side-nav"}>
        <Profile />
        <div className="hamburger" onClick={this.toggleMenu}>
          {isMenuOpen ? <CgClose /> : <CgMenu />}
        </div>
        <nav>
          <ul>
            <li className="nav__link">
              <Link to="/projects/">Projects</Link>
            </li>
            <li className="nav__link">
              <Link to="/resume/">Resume</Link>
            </li>
            <li className="nav__link">
              <Link to="/about">About Me</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidenav;
