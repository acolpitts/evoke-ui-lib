import React from "react";
import { render, screen } from "@testing-library/react";

import { About } from "./About.component";

describe("<About />", () => {
  test("rendered text", () => {
    render(<About />);
    expect(screen.getByText("ui component library")).toBeDefined();
  });
});
