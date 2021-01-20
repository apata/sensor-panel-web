import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("dummy test to verify testing env works", () => {
  render(<App />);
  const titleElement = screen.getByText(/Show data from/i);
  expect(titleElement).toBeInTheDocument();
});
