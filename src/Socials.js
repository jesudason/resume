import React from 'react';
import './Socials.css';
import { FaGithub, FaLinkedin, FaEnvelope } from '../node_modules/react-icons/fa';

class Socials extends React.Component {
  render() {
    return (
       <div className="socials--wrapper">     
          <a className="social-icon" href="/"><FaGithub /></a>
          <a className="social-icon" href="/"><FaEnvelope /></a>
          <a className="social-icon" href="/"><FaLinkedin /></a>

      </div>
    );
  }
}

export default Socials