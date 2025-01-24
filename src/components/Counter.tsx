"use client";

import { useState } from "react";

export default function Counter({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const restart = () => {
    setCount(0);
  };
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-center" data-testid="count">
        {count}
      </h1>
      <div className="gap-4 flex text-center text-5xl">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <button onClick={restart}>Reset</button>
    </div>
  );
}
