"use client";
import { BarChart3, Code2, FileText, Layers } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const graphicVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.13,
    },
  },
};

const blobVariants = {
  hidden: { opacity: 0, scale: 0.72 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.72, ease },
  },
};

export default function InsightsGraphic() {
  return (
    <motion.div
      className="relative mx-auto h-100 w-full max-w-162.5 mb-20"
      aria-hidden="true"
      initial="hidden"
      animate="visible"
      variants={graphicVariants}
    >
      <motion.div
        variants={blobVariants}
        className="absolute left-[18%] top-[-5%] h-32 w-32 rounded-full bg-[#3d8df8] md:h-52 md:w-52"
      />
      <motion.div
        variants={blobVariants}
        className="absolute left-[5%] top-[48%] h-28 w-28 rounded-[40%] bg-[#ff63bd] md:h-40 md:w-40"
      />

      <motion.div
        variants={blobVariants}
        className="absolute left-[3%] top-[65%] h-24 w-36 rotate-[-18deg] rounded-[45%] bg-[#ffcf4f] md:h-32 md:w-48"
      />

      <motion.div
        variants={blobVariants}
        className="absolute right-[5%] top-[25%] h-28 w-28 rounded-[45%] bg-[#f369c1]/90 md:h-40 md:w-40"
      />

      <motion.div
        variants={blobVariants}
        className="absolute right-[16%] top-[0%] h-28 w-32 rotate-[22deg] rounded-[45%] bg-[#ffd34e] md:h-40 md:w-48"
      />

      <motion.div
        variants={blobVariants}
        className="absolute bottom-[4%] right-[24%] h-36 w-36 rounded-full bg-soluble-mint/60 md:h-48 md:w-48 z-0"
      />

      <motion.div
        variants={cardVariants}
        className="absolute left-[-5%] top-[67%] z-10 w-[32%] rotate-[-8deg] rounded-2xl border border-white/80 bg-white p-3 shadow-[0_14px_32px_rgba(55,65,81,0.13)] backdrop-blur-md md:p-4 hover:scale-105 transition-all duration-200 animate-soluble-float"
      >
        {[
          [FileText, "Guides"],
          [Layers, "Case studies"],
          [BarChart3, "Product updates"],
          [Code2, "Engineering"],
        ].map(([Icon, label]) => (
          <div
            key={label as string}
            className="flex items-center gap-2 py-1 text-[10px] font-medium md:text-xs"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#f4f4f6]">
              <Icon size={12} />
            </span>
            {label as string}
          </div>
        ))}
      </motion.div>

      <ProductCard />

      <motion.div
        variants={cardVariants}
        className="absolute right-[-2%] top-[55%] z-30 w-[28%] rotate-[-7deg] rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_14px_32px_rgba(55,65,81,0.13)] backdrop-blur-md md:p-5 hover:scale-105 transition-transform cursor-pointer animate-soluble-float"
      >
        <div className="flex h-16 items-end justify-center gap-2 md:h-24">
          {[35, 52, 70, 88, 62].map((height, index) => (
            <motion.span
              key={index}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.45, delay: 1.05 + index * 0.07, ease }}
              className="w-3 rounded-t-full bg-soluble-blue/80 md:w-5"
            />
          ))}
        </div>
        <p className="mt-3 text-xl font-extrabold tracking-[-0.07em] md:text-2xl">
          +120%
        </p>
        <p className="mt-1 text-[10px] leading-tight text-muted-foreground md:text-xs">
          Product growth
          <br />
          through better
          <br />
          strategy
        </p>
      </motion.div>

      <DoodleArrow className="absolute -bottom-8 right-18 z-50" delay={2.4}/>

      <motion.div
        variants={cardVariants}
        className="absolute right-[10%] top-[-6%] z-30 w-[29%] rotate-[7deg] rounded-2xl border border-white/80 bg-white/90 p-3 shadow-[0_14px_32px_rgba(55,65,81,0.13)] backdrop-blur-md md:p-4 hover:scale-105 transition-all duration-200 animate-soluble-float"
      >
        {[
          ["Design", "bg-soluble-pink"],
          ["Development", "bg-soluble-blue"],
          ["Strategy", "bg-soluble-mint"],
        ].map(([label, color]) => (
          <div
            key={label}
            className="flex items-center gap-2 py-1.5 text-[10px] font-semibold md:text-xs"
          >
            <span className={`h-3 w-3 rounded-full ${color}`} />
            {label}
          </div>
        ))}
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3.9, ease }}
        className="absolute left-[8%] top-[0%] z-40 w-20 rotate-[-7deg] font-caveat text-base font-bold uppercase leading-[1.1] md:left-[0%] md:text-xl "
      >
        Real
        <br />
        ideas
        <br />
        real
        <br />
        impact
        <ComicArrow className="-bottom-20 -right-5" delay={3.85}/>
      </motion.span>
    </motion.div>
  );
}

function ProductCard() {
  return (
    <motion.div
      variants={cardVariants}
      className="absolute left-[18%] top-[10%] z-20 w-[55%] rounded-[18px] border border-white/70 bg-white/90 p-4 shadow-[0_20px_40px_rgba(55,65,81,0.18)] backdrop-blur-md md:p-5 hover:scale-104 hover:rotate-1 transition-all duration-300 delay-75"
    >
      <div className="h-32 overflow-hidden rounded-xl bg-linear-to-br from-[#b8dcff] via-[#edf4ff] to-[#ffd5e9] md:h-40">
        <div className="mx-auto mt-[-18px] flex h-44 w-32 items-end justify-center gap-1 md:mt-[-25px] md:h-60 md:w-44">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <span
              key={item}
              className="block w-5 rounded-t-[50%] border-2 border-white/70 bg-[#dedbd3] shadow-sm md:w-7"
              style={{
                height: `${72 + item * 11}px`,
                transform: `rotate(${item * 2 - 5}deg)`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <div>
          <span className="rounded-full bg-soluble-blue px-2 py-1 text-[8px] font-bold text-white">
            PRODUCT
          </span>
          <p className="mt-2 text-[12px] font-extrabold leading-tight md:text-base">
            How modern businesses
            <br />
            can build for scale
          </p>
          <div className="mt-2 space-y-1">
            <span className="block h-1 w-28 rounded-full bg-black/10" />
            <span className="block h-1 w-20 rounded-full bg-black/10" />
          </div>
        </div>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f5f4] text-lg">
          →
        </span>
      </div>
    </motion.div>
  );
}

export function DoodleArrow({
  className = "",
  delay = 1.15,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <svg
      viewBox="-10 -5 120 50"
      className={`pointer-events-none w-60 absolute ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M 75.923 27.343 C 51.641 53.206 21.355 23.139 7.263 10.967"
        stroke="#111"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin={'round'}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay, ease }}
      />
      <motion.path
        d="M 17.257 13.793 C 18.181 13.031 9.149 10.82 8.54 10.634 C 5.885 9.821 6.722 10.123 7.195 11.73 C 7.751 13.621 10.433 21.851 10.982 20.501 C 11.511 19.202 12.813 15.855 12.8 15.726 C 12.782 15.633 17.944 13.741 17.257 13.793 Z"
        fill={'#111111'}
        stroke="#111"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin={'round'}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.25, delay: delay + 0.63, ease }}
      />
    </svg>
  );
}

export function ComicArrow({
  className = "",
  delay = 1.15,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <svg
      viewBox="20 -5 45 50"
      className={`pointer-events-none w-20 absolute ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M 22.535 5.693 C 19.783 32.61 36.622 33.952 57.503 28.176"
        stroke="#111"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin={'round'}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay, ease }}
      />
      <motion.path
        d="M 49.302 26.249 C 51.994 26.656 56.183 27.179 57.904 27.979 C 56.124 30.078 53.326 32.091 51.542 33.524"
        stroke="#111"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin={'round'}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.25, delay: delay + 0.63, ease }}
      />
    </svg>
  );
}
