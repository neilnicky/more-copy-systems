import Counter from "@/components/Counter";
import Products from "./page";
import "@testing-library/jest-dom";
import { fireEvent, getByRole, render, screen } from "@testing-library/react";

describe("Product", () => {
  it("renders a product page", () => {
    render(<Products />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
  });
});

describe(Counter, () => {
  it("displays correct initail count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent?.split(":")[1]);
    expect(countValue).toEqual(0);
  });

  it("count should increment by 1 when + button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBtn = getByRole("button", { name: "+" });
   
    fireEvent.click(incrementBtn);
    const countValue = Number(getByTestId("count").textContent?.split(":")[1]);

    expect(countValue).toEqual(1);
  });
});
