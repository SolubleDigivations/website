"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { ReactNode, useRef } from "react";

interface MagneticButtonProps{
    children:ReactNode;
    strength?:number;
    className?:string;
}

export default function MagneticButton({
  children,
  strength = 0.35,
  className = "",
}:MagneticButtonProps) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 12,
    mass: 0.2,
  });

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 12,
    mass: 0.2,
  });

  const handleMouseMove = (e:any) => {
    if (!ref.current) return;

    //@ts-ignore
    const rect = ref.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (mouseX - centerX) * strength;
    const moveY = (mouseY - centerY) * strength;

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.button>
  );
}