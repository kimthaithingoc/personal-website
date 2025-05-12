"use client";

import { useEffect, useState } from "react";

interface Props {
  end: number;
  duration: number;
}
const CountUp = ({ end, duration }: Props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (end === 0) return;
    let startTime: number;
    let animationFrame: number;
    const updateCount = (timestamp: number) => {
      // Record the initial timestamp on the first call
      if (!startTime) startTime = timestamp;

      // Calculate the progress from 0 to 1 based on elapsed time
      // Elapsed time = current timestamp - start time
      // Divide by total duration (in milliseconds)
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Update the count based on progress, scaling from 0 to the `end` value
      setCount(Math.floor(progress * end));

      // Continue the animation if progress is not complete
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    // Start the animation
    animationFrame = requestAnimationFrame(updateCount);

    // Clean up the animation frame on unmount or when `end` or `duration` changes
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}</>;
};

export default CountUp;
