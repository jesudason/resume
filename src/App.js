import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Socials from "./Socials.js";
import Resume from "./pages/Resume";
import Sidenav from "./modules/Sidenav";
import About from "./pages/About";
import { Grid, Row, Col } from "react-flexbox-grid";

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
        <Grid fluid>
          <Row>
            <Col xs={12} md={3}>
              <Sidenav />
            </Col>
            <Col xs={12} md={9}>
              <div className="main">
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
            </Col>
          </Row>
        </Grid>
      </div>
    </Router>
  );
}

export default AppRouter;
