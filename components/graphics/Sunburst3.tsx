"use client";

import { motion } from "motion/react";

interface SunburstProps {
  className?: string;
}

export function Sunburst3({className=''}:SunburstProps) {
  return (
    <motion.svg
      width="90"
      height="80"
      viewBox="-30 10 55 36"
      fill="none"
      initial={{ opacity: 0, y:-20, x:-10 }}
      animate={{ opacity: 1, y:0, x:0 }}
      transition={{ duration: 0.4, delay: 1.6, ease:[0.1,0.15,0.25,1] }}
      className={`text-[#111111] ${className}`}
    >
      <path d="M -17.957 43.851 L -24.267 26.669" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M -1.958 33.94 L -13.694 18.666" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M 10.686 17.984 L -5.15 10.296" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </motion.svg>
  );
}