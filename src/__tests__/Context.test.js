import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useCustomerStore, CustomerStore } from "../libs/store";

const ConsumerComponent = () => {
  const { state, dispatch } = useCustomerStore();

  const toggleLogin = () => dispatch({ type: "auth", payload: true });

  return (
    <>
      <button type="button" onClick={toggleLogin} />
      Message: {state.isLoggedIn ? "Welcome" : "Please, log in"}
    </>
  );
};

describe("Context", () => {
  it("show default value", () => {
    const { getByText } = render(
      <CustomerStore>
        <ConsumerComponent />
      </CustomerStore>
    );

    expect(getByText(/^Message:/)).toHaveTextContent("Message: Please, log in");
  });

  it("toggle value", () => {
    const { getByText, getByRole } = render(
      <CustomerStore>
        <ConsumerComponent />
      </CustomerStore>
    );

    expect(getByText(/^Message:/)).toHaveTextContent("Message: Please, log in");
    userEvent.click(getByRole("button"));
    expect(getByText(/^Message:/)).toHaveTextContent("Message: Welcome");
  });
});
