import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal-root");
document.body.appendChild(modalRoot);

const Modal = ({ onClose, children }) => {
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => modalRoot.removeChild(el);
  });

  return createPortal(
    <div onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    el
  );
};

describe("Portal", () => {
  it("show and close modal", () => {
    const handleClose = jest.fn();

    const { getByText } = render(
      <Modal onClose={handleClose}>
        <div>Test Pass</div>
      </Modal>
    );

    expect(getByText("Test Pass")).toBeInTheDocument();
    userEvent.click(getByText(/close/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("unmount", () => {
    const { getByText, unmount, queryByText } = render(
      <Modal>
        <div>Mount Pass</div>
      </Modal>
    );

    expect(getByText("Mount Pass")).toBeInTheDocument();
    unmount();
    expect(queryByText("Mount Pass")).not.toBeInTheDocument();
  });
});
