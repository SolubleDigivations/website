
"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  useMotionValue,
} from "motion/react";

interface CounterProps {
  initialValue?: number;
  value: string;
}

export function Counter({ value, initialValue=0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const target = parseInt(value, 10);
  const suffix = value.replace(/[0-9]/g, "");

  const count = useMotionValue(initialValue);
  const [display, setDisplay] = useState(initialValue);

  useEffect(() => {
    // Subscribe to changes in the animated value
    const unsubscribe = count.on("change", (latest) => {
      setDisplay(Math.round(latest as number));
    });

    return unsubscribe;
  }, [count]);

  useEffect(() => {
    if (!isInView || Number.isNaN(target)) return;

    const controls = animate(count, target, {
      duration: 2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, target, count]);

  if (value === "∞") {
    return <span ref={ref}>∞</span>;
  }

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
