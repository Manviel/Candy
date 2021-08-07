import userEvent from "@testing-library/user-event";

import TestRedux from "../pages/TestRedux";

import { renderWithRedux } from "../libs/reducer";

describe("Redux", () => {
  it("check initial state", () => {
    const { getByRole } = renderWithRedux(<TestRedux />);

    expect(getByRole("heading")).toHaveTextContent("0");
  });

  it("increments the counter", () => {
    const { getByRole, getByText } = renderWithRedux(<TestRedux />, {
      initialState: { count: 5 },
    });

    userEvent.click(getByText("+1"));
    expect(getByRole("heading")).toHaveTextContent("6");
  });

  it("decrements the counter", () => {
    const { getByRole, getByText } = renderWithRedux(<TestRedux />, {
      initialState: { count: 10 },
    });

    userEvent.click(getByText("-1"));
    expect(getByRole("heading")).toHaveTextContent("9");
  });
});
