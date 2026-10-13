"use client";
import { motion } from "motion/react";

interface SunburstProps {
  className?: string;
  delay?:number;
  duration?:number;
}

export function Sunburst4({className = "", delay=0.45, duration=0.4 }: SunburstProps) {
  return (
    <motion.svg
      width="120"
      height="60"
      viewBox="0 0 46 38"
      fill="none"
      initial={{ opacity: 0, y: 30, x: -5, scale: 0.6 }}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      transition={{ duration, delay}}
      className={`text-[#111111] ${className}`}
    >
      <path
        d="M 11.69 33.939 L 0.209 18.159"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M 22.344 29.811 L 18.842 8.189"
        stroke="currentColor"
        strokeWidth="2.9"
        strokeLinecap="round"
      />
      <path
        d="M 33.872 30 L 40.974 11.155"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 42.845 35.691 L 57.171 21.223"
        stroke="currentColor"
        strokeWidth="2.9"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
