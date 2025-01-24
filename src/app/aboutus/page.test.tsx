import About from "./page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Page", () => {
  it("renders a heading", () => {
    render(<About />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
  });
});

