import { words } from "@/components/Hero";
import { TypewriterEffectDemo } from "@/components/TypewriterEffectDemo";
import { fireEvent, render, screen } from "@testing-library/react";

// failing test - need to mock framer motion etc...

describe("CTA Button", () => {
  it("should navigate to products page when ViewProducts buttom is clicked", () => {
    const originalLocation = { ...window.location };
    window.location = Object.create(originalLocation);
    window.location.href = "";

    render(<TypewriterEffectDemo words={words} />);

    const productLink = screen.getByRole("link", { name: "View Products" });

    fireEvent.click(productLink);
    expect(window.location.href).toBe("/products");
    window.location = originalLocation;

    // Check that the link exists
    expect(productLink).toBeInTheDocument();

    // Verify the href attribute
    expect(productLink).toHaveAttribute("href", "/products");

    // Verify the aria-label
    expect(productLink).toHaveAttribute("aria-label", "View our products");
  });
});
