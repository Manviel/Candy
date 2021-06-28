import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

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

    fireEvent.change(input, {
      target: { value: "React" },
    });

    expect(input.value).toBe("React");
  });
});
