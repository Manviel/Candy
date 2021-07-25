import React from "react";
import { render } from "@testing-library/react";

import FileZone from "../components/FileZone";

describe("FileZone", () => {
  it("fetch data from an API", async () => {
    const hits = ["Angular", "React"];

    const state = {
      data: hits,
      mode: null,
    };

    jest
      .spyOn(global, "fetch")
      .mockImplementation(() => Promise.resolve({ data: hits }));

    const { findAllByRole } = render(<FileZone state={state} />);

    const items = await findAllByRole("aria-label");

    expect(items).toHaveLength(2);
  });
});
