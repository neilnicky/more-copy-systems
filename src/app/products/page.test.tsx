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
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("count should increment by 1 when + button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBtn = getByRole("button", { name: "+" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incrementBtn);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });

  it("count should decrement by 1 when - button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const decrementBtn = getByRole("button", { name: "-" });
    expect(Number(getByTestId("count").textContent)).toEqual(0);
    fireEvent.click(decrementBtn);
    expect(Number(getByTestId("count").textContent)).toEqual(-1);
  });

  it("count should reset to initial count when reset button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const resetBtn = getByRole("button", { name: "Reset" });
    expect(Number(getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(resetBtn);
    expect(Number(getByTestId("count").textContent)).toEqual(0);
  });
});
