import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import Socials from "./Socials.js";
import Timeline from "./Timeline.js";
import "./App.scss";

function Projects() {
  return <div className="page__wrapper"></div>;
}

function About() {
  return <div className="page__wrapper"></div>;
}

function Resume() {
  return (
    <div className="App resume">
      <div className="page__wrapper">
        <Timeline />
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="App homepage">
      <Homepage />
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
