"use client";

import { easeIn, motion } from "motion/react";
import { useState } from "react";
import type { IconType } from "react-icons";

interface TechnologyPillProps {
  name: string;
  icon: IconType;
  index: number;
  color:string;
}

export default function TechnologyPill({
  name,
  icon: Icon,
  index,
  color='#000000',
}: TechnologyPillProps) {
  const [entered, setEntered] = useState(false);
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
      transition={
        entered ?{
          ease:easeIn
        }:{
        duration: 0.45,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      onAnimationComplete={()=>setEntered(true)}
      whileHover={{
        y: -3,
      }}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-2 py-4 w-1/9 text-sm font-medium shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors hover:border-foreground/20 cursor-default border border-foreground/10`}
    >
      <Icon
        size={20}
        color={color}
        className={` transition-transform duration-300 group-hover:scale-110`}
      />

      <span className='text-sm'>{name}</span>
    </motion.div>
  );
}