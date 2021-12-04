import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("web", () => {
  it("works", () => {
    render(<div>element</div>);
    expect(screen.getByText("element")).toBeInTheDocument();
  });
});
