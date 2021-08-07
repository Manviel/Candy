import React from "react";
import { screen, fireEvent } from "@testing-library/react";

import App from "../components/App";

import { renderWithRedux } from "../libs/reducer";

describe("App", () => {
  it("displays a link", () => {
    renderWithRedux(<App />);

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  it("async data loading", async () => {
    renderWithRedux(<App />);

    expect(screen.queryByText(/responsibility/i)).toBeNull();
    expect(await screen.findByText(/responsibility/i)).toBeInTheDocument();
  });

  it("navigate to home", () => {
    renderWithRedux(<App />);

    const navBar = screen.getByTestId("navbar");
    const homeLink = screen.getByTestId("home-link");

    expect(navBar).toContainElement(homeLink);
  });

  it("navigate to login", () => {
    renderWithRedux(<App />);

    fireEvent.click(screen.getByTestId("login-link"));

    expect(screen.getByText("Don't have an account")).toBeInTheDocument();
  });
});
