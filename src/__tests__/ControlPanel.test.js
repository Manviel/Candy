import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ControlPanel from "../components/ControlPanel";

describe("ControlPanel", () => {
  it("checkbox click", () => {
    render(<ControlPanel />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("tab focus", () => {
    render(<ControlPanel />);

    const checkbox = screen.getByRole("checkbox");

    userEvent.tab();

    expect(checkbox).toHaveFocus();
  });

  it("select change", () => {
    render(<ControlPanel />);

    const options = screen.getByRole("listbox");

    userEvent.selectOptions(options, "italic");
    expect(screen.getByText("Italic").selected).toBeTruthy();
  });
});
