import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

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

  it("checkbox click", () => {
    render(<App />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
