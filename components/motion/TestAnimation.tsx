"use client";

import {motion} from 'motion/react';

export default function TestAnimation(){
    return (
        <motion.div 
        initial={{opacity:0, y:50,}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8}}
        className='flex h-40 w-40 items-center justify-center rounded-3xl bg-black text-white'>
            Hello Soluble!
        </motion.div>
    );
}