"use client";

import { buttonVariants } from "./ui/button";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo({
  words,
}: {
  words: { text: string; className?: string }[];
}) {
  return (
    <div className="mt-10  ">
      <TypewriterEffect words={words} />
      <div className="flex justify-center mb-6  gap-6">
        <a
          className={buttonVariants({
            size: "sm",
            className: "rounded-full mt-8",
          })}
          href="#products"
          aria-label="View our products"
        >
          View Products
        </a>
        <a
          className={buttonVariants({
            variant: "ghost",
            size: "sm",
            className: "rounded-full mt-8 ",
          })}
          href="#services"
          aria-label="View our services"
        >
          Our Services
        </a>
      </div>
    </div>
  );
}
