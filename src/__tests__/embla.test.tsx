import React from "react";
import { render, screen } from "@testing-library/react";

import { HeroImgs } from "@/constants";
import EmblaCarousel from "@/components/EmblaCarousel";
import Image from "next/image";

// Mock Embla Carousel plugins and dependencies
jest.mock("embla-carousel-react", () => ({
  __esModule: true,
  default: jest.fn(() => [null, jest.fn()]),
}));

describe("EmblaCarousel Component", () => {
  it("renders carousel with 3 slides", () => {
    render(
      <EmblaCarousel options={{ loop: true }}>
        {HeroImgs.map((slide, i) => (
          <div key={i} data-testid="embla-slide">
            <Image
              src={slide.imgUrl}
              alt={slide.title}
              width={1920}
              height={1080}
            />
          </div>
        ))}
      </EmblaCarousel>
    );

    const slides = screen.getAllByTestId("embla-slide");
    expect(slides.length).toBe(3);
  });
});
