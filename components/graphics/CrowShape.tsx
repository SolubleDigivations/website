import { motion } from "motion/react";
import React from "react";

interface CrowProp{
    className?:string
}

function CrowShape({className=''}:CrowProp) {
  return (
    <motion.svg
      viewBox="150 150 280 150"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      aria-hidden='true'
    >
      <motion.path
        fill="none"
        stroke="#111111"
        strokeWidth={10}
        strokeLinecap="round"
        initial={{
          pathLength: 0,
        }}
        whileInView={{
          pathLength: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        d="M 178.781 171.641 C 178.781 171.641 225.393 157.888 248.466 162.502 C 284.688 169.747 314.929 209.844 319.293 244.753 C 321.146 259.581 304.835 304.059 281.594 285.878 C 263.682 271.865 274.824 204.092 315.865 186.492 C 334.324 178.576 358.075 169.558 378.696 178.495 C 389.687 183.258 394.386 190.567 402.686 203.628 C 410.033 215.189 414.109 229.649 414.109 240.183"
      ></motion.path>
    </motion.svg>
  );
}

export default CrowShape;
