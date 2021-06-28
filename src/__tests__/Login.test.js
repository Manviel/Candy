import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Login from "../pages/Login";

describe("Login", () => {
  it("renders inputs", () => {
    render(<Login />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  });

  it("change input", () => {
    render(<Login />);

    expect(screen.queryByText(/React/)).toBeNull();

    const input = screen.getByRole("textbox");

    userEvent.type(input, "React");

    expect(input.value).toBe("React");
  });

  it("input focus", () => {
    render(<Login />);

    const input = screen.getByRole("textbox");

    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});
