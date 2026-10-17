"use client";

import { motion } from "motion/react";

// Hand-drawn arrow pointing in various directions with authentic pencil-sketch drawing animation
export function DoodleArrow({
  direction = "down-right",
  className = "",
  delay = 0.25,
  color = "#111111",
}: {
  direction?: "down-right" | "down-left" | "up-right" | "up-left" | "curved-down";
  className?: string;
  delay?: number;
  color?: string;
}) {
  if (direction === "down-right") {
    return (
      <svg
        viewBox="0 0 70 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <motion.path
          d="M10 10 C25 8, 48 18, 52 46"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay },
            opacity: { duration: 0.08, delay },
          }}
        />
        <motion.path
          d="M 40.819 35.706 L 52.33 46.559 L 56.311 30.936"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 0.25, ease: "easeOut", delay: delay + 0.35 },
            opacity: { duration: 0.08, delay: delay + 0.35 },
          }}
        />
      </svg>
    );
  }

  if (direction === "down-left") {
    return (
      <svg
        viewBox="0 0 70 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <motion.path
          d="M 70.196 2.097 C 55.196 0.097 22 16 18 44"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay },
            opacity: { duration: 0.08, delay },
          }}
        />
        <motion.path
          d="M 27.999 34.766 L 17.558 45.062 L 14.813 31.675"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 0.25, ease: "easeOut", delay: delay + 0.35 },
            opacity: { duration: 0.08, delay: delay + 0.35 },
          }}
        />
      </svg>
    );
  }

  if (direction === "curved-down") {
    return (
      <svg
        viewBox="0 0 60 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <motion.path
          d="M12 12 C35 15, 48 35, 38 56"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
            opacity: { duration: 0.08, delay },
          }}
        />
        <motion.path
          d="M26 48 L37 57 L46 45"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 0.25, ease: "easeOut", delay: delay + 0.4 },
            opacity: { duration: 0.08, delay: delay + 0.4 },
          }}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 70 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d="M12 50 C24 35, 42 22, 58 14"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay },
          opacity: { duration: 0.08, delay },
        }}
      />
      <motion.path
        d="M44 11 L59 13 L56 28"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 0.25, ease: "easeOut", delay: delay + 0.35 },
          opacity: { duration: 0.08, delay: delay + 0.35 },
        }}
      />
    </svg>
  );
}

// 3 Burst tick marks that animate like radiating sketch lines
export function BurstTicks({
  className = "",
  color = "#111111",
  delay = 0.25,
}: {
  className?: string;
  color?: string;
  delay?: number;
}) {
  return (
    <svg
      viewBox="0 0 36 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      aria-hidden="true"
    >
      <motion.path
        d="M 4.766 26.976 L -0.355 8.149"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1], delay },
          opacity: { duration: 0.08, delay },
        }}
      />
      <motion.path
        d="M18 24 L18 4"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1], delay: delay + 0.07 },
          opacity: { duration: 0.08, delay: delay + 0.07 },
        }}
      />
      <motion.path
        d="M 29.448 27.359 L 36.611 7.511"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1], delay: delay + 0.14 },
          opacity: { duration: 0.08, delay: delay + 0.14 },
        }}
      />
    </svg>
  );
}

// 4-point doodle sparkle that springs and draws in
export function DoodleStar({
  className = "",
  color = "#A98BFF",
  delay = 0.3,
}: {
  className?: string;
  color?: string;
  delay?: number;
}) {
  return (
    <motion.svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      initial={{ scale: 0, rotate: -35, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 420,
        damping: 18,
        delay,
      }}
    >
      <motion.path
        d="M16 2 C16 9, 23 16, 30 16 C23 16, 16 23, 16 30 C16 23, 9 16, 2 16 C9 16, 16 9, 16 2 Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.05, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

// Hand-drawn imperfect circle that sketches around an element
export function DoodleCircle({
  className = "",
  color = "#FF8B68",
  delay = 0.3,
}: {
  className?: string;
  color?: string;
  delay?: number;
}) {
  return (
    <svg
      viewBox="0 0 120 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d="M 12 35 C 10 15, 45 6, 85 8 C 112 10, 116 28, 108 48 C 98 65, 30 68, 14 50 C 6 42, 10 24, 28 20"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
          opacity: { duration: 0.1, delay },
        }}
      />
    </svg>
  );
}

// Doodle loop-de-loop swirl that draws smoothly
export function DoodleSwirl({
  className = "",
  color = "#FF91D4",
  delay = 0.2,
}: {
  className?: string;
  color?: string;
  delay?: number;
}) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d="M 50 15 C 30 5, 10 18, 14 36 C 18 50, 42 52, 46 36 C 48 24, 32 18, 24 28 C 18 36, 26 44, 34 40"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
          opacity: { duration: 0.1, delay },
        }}
      />
    </svg>
  );
}

// Yellow Sticky Note with playful tactile stamp-down bounce
export function StickyNote({
  children,
  className = "",
  rotate = "-rotate-3",
  delay = 0.22,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0, y: -22, rotate: "-14deg" }}
      animate={{ scale: 1, opacity: 1, y: 0, rotate: "0deg" }}
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 22,
        delay,
      }}
      className={`relative bg-linear-to-br from-background to-50% to-soluble-yellow text-[#111111] p-3 sm:p-4 rounded-xl shadow-md border border-[#F3E26B] font-caveat ${rotate} ${className}`}
    >
      {/* Subtle top tape / fold mark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/5 rounded-xs" />
      {children}
    </motion.div>
  );
}

// Frosted 3D Card Container with bouncy pop-in
export function FrostedCard({
  children,
  className = "",
  bg = "bg-white/80",
  shadow = "shadow-[0_12px_32px_rgba(0,0,0,0.06)]",
  border = "border border-white/60",
  delay = 0.15,
  rotate = 0,
}: {
  children: React.ReactNode;
  className?: string;
  bg?: string;
  shadow?: string;
  border?: string;
  delay?: number;
  rotate?: number;
}) {
  return (
    <motion.div
      className={`rounded-3xl backdrop-blur-md ${bg} ${border} ${shadow} ${className}`}
      initial={{ scale: 0.68, opacity: 0, y: 24, rotate: rotate - 8 }}
      animate={{ scale: 1, opacity: 1, y: 0, rotate }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 22,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
