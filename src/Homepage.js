import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import profilepic from './assets/profile-pic.jpg';
import './Homepage.scss';

class Homepage extends React.Component {
  render() {
    return (  
      <div className="homepage__wrapper">
        <div className="row">
          <div className="col-xs-12 col-sm-3">
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
          <div className="col-xs-12 col-sm-9">
            <h1>Nicole Jesudason</h1>
            <h2>WEB DEVELOPER</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
          </div>          
        </div>
      </div>
    );
  }
}

export default Homepage