import React from "react";
import { render, screen } from "@testing-library/react";

import App from "../components/App";
import Login from "../components/Login";

describe("App", () => {
  it("renders link", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Home/i);

    expect(linkElement).toBeInTheDocument();
  });
});

describe("Login", () => {
  it("renders inputs", () => {
    render(<Login />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  });
});
