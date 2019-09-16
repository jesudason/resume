import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from './Homepage.js'
import Socials from './Socials.js'
import Timeline from './Timeline.js'
import './App.css';

function Projects() {
  return (
    <div className="page-wrapper">
    </div>
  );
}

function About() {
  return (
    <div className="page-wrapper">
    </div>
  );
}

function Resume() {
  return (
    <div className="App resume">
      <div className="page-wrapper">
        <Timeline/>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="App homepage">
      <div class="bg-overlay"></div>
      <div class="welcome-overlay"></div> 
      <div className="page-wrapper">
        <Socials />
        <div className="homepage--wrapper">
          <Homepage />
        </div>
      </div>
    </div>
  );
}


function AppRouter() {
  return (
    <Router>
      <div>   
        <Route path="/" exact component={Home} />
        <Route path="/about/" exact component={About} />
        <Route path="/resume/" component={Resume} />
        <Route path="/projects/" component={Projects} />
      </div>
    </Router>
  );
}

export default AppRouter;

