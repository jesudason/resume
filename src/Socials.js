import React from 'react';
import './Socials.scss';
import { FaGithub, FaLinkedin, FaEnvelope } from '../node_modules/react-icons/fa';

class Socials extends React.Component {
  render() {
    return (
       <div className="socials">     
          <a className="socials__icon" href="/"><FaGithub /></a>
          <a className="socials__icon" href="/"><FaEnvelope /></a>
          <a className="socials__icon" href="/"><FaLinkedin /></a>

      </div>
    );
  }
}

export default Socials