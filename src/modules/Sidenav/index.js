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
      <div
        data-testid="side-nav"
        className={isMenuOpen ? "side-nav side-nav--open" : "side-nav"}
      >
        <div className="hamburger" onClick={this.toggleMenu}>
          {isMenuOpen ? <CgClose /> : <CgMenu />}
        </div>
        <nav>
          <ul>
            <li className="nav__link">
              <Link data-testid="home-link" to="/">
                <span className="sr-only">Home</span>
                <Profile />
              </Link>
            </li>
            <li className="nav__link">
              <Link data-testid="projects-link" to="/projects/">
                Projects
              </Link>
            </li>
            <li className="nav__link">
              <Link data-testid="resume-link" to="/resume/">
                Resume
              </Link>
            </li>
            <li className="nav__link">
              <Link data-testid="about-link" to="/about">
                About Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidenav;
