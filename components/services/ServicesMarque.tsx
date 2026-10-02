"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

function ServicesMarque() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["20%", "-45%"]
  );

  return (
    <section
      ref={containerRef}
      className="w-full overflow-hidden py-20"
    >
      <motion.div
        style={{ x }}
        className="
          flex
          w-max
          items-center
          gap-8
          whitespace-nowrap
          font-outfit
          text-8xl
          font-bold
          text-muted-foreground/20
        "
      >
        <span className="text-soluble-yellow/50">Development</span>
        <span>·</span>

        <span>E-commerce</span>
        <span>·</span>

        <span className="text-soluble-pink/50">SEO</span>
        <span>·</span>

        <span>Insights</span>
        <span>·</span>

        <span className="text-soluble-mint/50">Social</span>
        <span>·</span>

        <span>GEO</span>
        <span>·</span>

        <span>Apps</span>
        <span>·</span>

        <span>Insights</span>
      </motion.div>
    </section>
  );
}

export default ServicesMarque;