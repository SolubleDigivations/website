
import { easeIn, motion } from "motion/react";
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
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-2 py-4 w-1/9 text-sm font-medium shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:border-foreground/20 cursor-default border border-foreground/10 hover:-translate-y-1 transition-all`}
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