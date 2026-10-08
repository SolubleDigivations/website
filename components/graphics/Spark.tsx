"use client";

import { delay, motion } from "motion/react";
import { useState } from "react";

export default function Spark({
  size = 32,
  className = "",
  color = "#000000",
  delay = 2,
}) {
  const [entered, setEntered] = useState(false);

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
      initial={
        entered
          ? undefined
          : {
              scale: 0,
              y:20
            }
      }
      onAnimationComplete={() => setEntered(true)}
      animate={
        entered
          ? {
              rotate: [0, 8, 0],
              scale: [1, 1.08, 1],
            }
          : {
              scale: 1,
              y:0
            }
      }
      transition={
        entered
          ? {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : {
              duration: 0.2,
              delay: delay,
              ease: [0, 0, 0.2, 1],
            }
      }
    >
      <path
        d="M16 1C16.8 10.5 21.5 15.2 31 16C21.5 16.8 16.8 21.5 16 31C15.2 21.5 10.5 16.8 1 16C10.5 15.2 15.2 10.5 16 1Z"
        fill={color}
      />
    </motion.svg>
  );
}
