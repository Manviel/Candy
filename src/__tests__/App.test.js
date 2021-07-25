import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "../components/App";

describe("App", () => {
  it("displays a link", () => {
    render(<App />);

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  it("async data loading", async () => {
    render(<App />);

    expect(screen.queryByText(/responsibility/i)).toBeNull();
    expect(await screen.findByText(/responsibility/i)).toBeInTheDocument();
  });

  it("navigate to home", () => {
    render(<App />);

    const navBar = screen.getByTestId("navbar");
    const homeLink = screen.getByTestId("home-link");

    expect(navBar).toContainElement(homeLink);
  });

  it("navigate to login", () => {
    render(<App />);

    fireEvent.click(screen.getByTestId("login-link"));

    expect(screen.getByText("Don't have an account")).toBeInTheDocument();
  });
});
