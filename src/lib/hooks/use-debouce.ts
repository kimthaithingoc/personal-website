"use client";

import { useEffect, useState } from "react";

export const useDebouce = <T>(value: T, delay: number): T => {
  const [deboucedValue, setDeboucedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeboucedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return deboucedValue;
};
