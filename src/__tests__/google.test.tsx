import GoogleReview from "@/components/GoogleReview";
import { render, screen } from "@testing-library/react";

describe("Google Review", () => {
  it("renders the review section with correct rating", () => {
    const { getByRole } = render(<GoogleReview rating={5.0} />);
    const rating = Number(getByRole("paragraph").textContent);

    expect(rating).toEqual(5.0);
  });
});
