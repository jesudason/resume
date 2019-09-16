import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import profilepic from './assets/profile-pic.jpg'
import './Homepage.css';

class Homepage extends React.Component {
  render() {
    return (
       
        <div className="homepage--text">         
          <h2>Nicole Jesudason</h2>
          <h4>WEB DEVELOPER</h4>
          <p>Hello, I’m a UI/UX Designer & Frontend,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
          <nav>
            <ul>
              <li className="homepage__button">
                <Link to="/projects/">Projects</Link>
              </li>
              <li className="homepage__button">
                <Link to="/resume/">Resume</Link>
              </li>
              <li className="homepage__button">
                <Link to="/about">About Me</Link>
              </li>
            </ul>
          </nav>
        </div>
      
    );
  }
}

export default Homepage