"use client";

import { motion } from "motion/react";
import type { IconType } from "react-icons";

interface TechnologyPillProps {
  name: string;
  icon: IconType;
  index: number;
}

export default function TechnologyPill({
  name,
  icon: Icon,
  index,
}: TechnologyPillProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-50px",
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -3,
      }}
      className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-medium shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors hover:border-foreground/20"
    >
      <Icon
        size={17}
        className="text-foreground/70 transition-transform duration-300 group-hover:scale-110"
      />

      <span>{name}</span>
    </motion.div>
  );
}