"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

export default function ShapeGraphic() {
  const checklist = [
    "User Personas",
    "Feature Prioritisation",
    "Technical Feasibility",
    "MVP Roadmap",
  ];

  return (
    <div className="relative w-full max-w-[480px] h-[340px] flex items-center justify-center select-none">
      
      {/* Background Soft Blue Glow */}
      <div className="absolute inset-4 rounded-full bg-[#6C8CFF]/15 blur-3xl" />

      {/* Handwritten Text on Top-Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -14 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -12 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute -top-2 left-2 sm:left-4 z-20 font-caveat text-[15px] sm:text-[17px] font-bold text-[#111111] leading-tight text-left"
      >
        <span>IDEAS</span><br />
        <span>INTO A</span><br />
        <span>CLEAR</span><br />
        <span>DIRECTION.</span>
      </motion.div>

      {/* Network Blueprint Nodes in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 360 260" className="w-[360px] h-[260px] opacity-70">
          {/* Connecting Lines */}
          <line x1="60" y1="90" x2="160" y2="50" stroke="#6C8CFF" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
          <line x1="160" y1="50" x2="280" y2="80" stroke="#6C8CFF" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
          <line x1="60" y1="90" x2="110" y2="190" stroke="#6C8CFF" strokeWidth="1.2" opacity="0.4" />
          <line x1="110" y1="190" x2="260" y2="210" stroke="#6C8CFF" strokeWidth="1.2" opacity="0.4" />
          <line x1="280" y1="80" x2="260" y2="210" stroke="#6C8CFF" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
          <line x1="160" y1="50" x2="200" y2="140" stroke="#6C8CFF" strokeWidth="1.2" opacity="0.5" />

          {/* Node Circles */}
          <circle cx="60" cy="90" r="5" fill="#6C8CFF" />
          <circle cx="60" cy="90" r="10" stroke="#6C8CFF" strokeWidth="1" fill="none" opacity="0.4" />
          
          <circle cx="160" cy="50" r="6" fill="#6C8CFF" />
          <circle cx="280" cy="80" r="5" fill="#6C8CFF" />
          <circle cx="110" cy="190" r="4.5" fill="#6C8CFF" />
          <circle cx="260" cy="210" r="5.5" fill="#6C8CFF" />
          <circle cx="200" cy="140" r="4" fill="#6C8CFF" />
        </svg>
      </div>

      {/* Main Product Strategy Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -4 }}
        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ rotate: 0, scale: 1.02 }}
        className="relative z-10 w-[270px] sm:w-[290px] rounded-2xl bg-white p-5 shadow-[0_16px_36px_rgba(108,140,255,0.14)] border border-[#E4E9FF] cursor-pointer"
      >
        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <h4 className="text-sm font-bold text-[#111111] tracking-tight">
            Product Strategy
          </h4>
          <span className="flex h-2 w-2 rounded-full bg-[#6C8CFF]" />
        </div>

        {/* Checklist Items */}
        <div className="mt-3.5 space-y-2.5">
          {checklist.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
              className="flex items-center gap-2.5"
            >
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#6C8CFF]/15 text-[#4264DB]">
                <Check className="h-3.5 w-3.5 stroke-[3]" />
              </div>
              <span className="text-xs font-semibold text-[#2D3139]">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
