import React from "react";
import Resume from "./";
import "jest-dom/extend-expect";
// highlight-end

jest.mock("./api/posts");

// highlight-start
test("We show a list of posts", () => {
  render(<Resume />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});
