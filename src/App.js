import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import Socials from "./Socials.js";
import Timeline from "./pages/Timeline/index.js";
import Sidenav from "./modules/Sidenav";

import "./App.scss";

function Projects() {
  return <div className="page__wrapper"></div>;
}

function About() {
  return <div className="page__wrapper"></div>;
}

function Resume() {
  return <Timeline />;
}

function Home() {
  return <Homepage />;
}

function AppRouter() {
  return (
    <Router>
      <div className="App">
        <div className="page__wrapper">
          <div className="row">
            <div className="col-xs-12 col-sm-3">
              <Sidenav />
            </div>
            <div className="col-xs-12 col-sm-9">
              <Route path="/" exact component={Home} />
              <Route path="/about/" exact component={About} />
              <Route path="/resume/" component={Resume} />
              <Route path="/projects/" component={Projects} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
