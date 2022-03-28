import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import About from "./pages/About/index.js";
import Sidenav from "./modules/Sidenav/index.js";
import App from "./App";
import { createMemoryHistory } from "history";
// import TestRouter from "./TestRouter";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

it("should render the about page", () => {
  const { container, getByTestId } = renderWithRouter(<About />);

  const pageTitle = "About Me";

  expect(container.innerHTML).toMatch(pageTitle);
});

// it("should display a loading text", () => {
//   const { getByTestId } = render(<Resume />);

//   expect(getByTestId("loading")).toHaveTextContent("Loading...");
// });
