import React from "react";
import { render, screen } from "@testing-library/react";

import App from "../components/App";

import Login from "../pages/Login";

describe("App", () => {
  it("displays a link", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Home/i);

    expect(linkElement).toBeInTheDocument();
  });

  it("async data loading", async () => {
    render(<App />);

    expect(screen.queryByText(/responsibility/i)).toBeNull();
    expect(await screen.findByText(/responsibility/i)).toBeInTheDocument();
  });
});

describe("Login", () => {
  it("renders inputs", () => {
    render(<Login />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  });
});
