import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import About from "../../pages/About/index.js";
import Sidenav from "./index.js";
import App from "../../App";
import { act } from "react-dom/test-utils";
import { createMemoryHistory } from "history";
import { MemoryRouter } from "react-router-dom";

describe("Sidenav", () => {
  it("navigates home when you click the logo", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    act(() => {
      const goHomeLink = screen.getByTestId("home-link");
      goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(document.body.textContent).toContain("Nicole Jesudason");
  });
  it("navigation to about me page", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    act(() => {
      const goHomeLink = screen.getByTestId("about-link");
      goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(document.body.textContent).toContain("About Me");
  });
});
