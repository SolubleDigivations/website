import { motion } from "motion/react";
import React from "react";

interface CrowProp{
    className?:string
}

function CrowShape({className=''}:CrowProp) {
  return (
    <motion.svg
      viewBox="100 100 300 300"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} w-20`}
      fill="none"
      aria-hidden='true'
    >
      <motion.path
        fill="none"
        stroke="#111111"
        strokeWidth={12}
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
        d="M 111.164 171.641 C 139.876 160.314 173.206 192.618 190.381 210.52 C 201.914 222.541 205.742 229.309 214.004 243.422 C 325.515 433.904 15.766 307.291 300.937 229.201 C 320.277 223.905 374.263 215.351 388.443 250.933"
      ></motion.path>
    </motion.svg>
  );
}

export default CrowShape;
