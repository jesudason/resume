import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Socials from "./Socials.js";
import Resume from "./pages/Resume";
import Sidenav from "./modules/Sidenav";
import About from "./pages/About";

import "./App.scss";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Homepage />,
  },
  {
    path: "/about",
    main: () => <About />,
  },
  {
    path: "/resume",
    main: () => <Resume />,
  },
];

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
              <Switch>
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))}
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
