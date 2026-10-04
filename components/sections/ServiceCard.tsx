"use client";

import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { CSSProperties } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  color,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative min-h-[270px] overflow-hidden rounded-[1.25rem] border border-border bg-white p-6 cursor-pointer"
    >
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Icon */}
        <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background">
          <Icon size={25} strokeWidth={1.8} />
        </div>

        {/* Text */}
        <div className="my-auto max-w-[220px]">
          <h3 className="text-2xl font-bold tracking-[-0.04em]">{title}</h3>

          <p className="mt-2 text-sm leading-5 text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Arrow */}
        <div className="mt-6 flex h-8 w-8 items-center justify-center rounded-full border border-border text-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-foreground group-hover:text-background">
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Decorative color shape */}
      <div
        className={`absolute -bottom-12 -right-7 lg:-bottom-12 lg:-right-8 h-40 w-40 lg:h-32 lg:w-32 rounded-full ${color} transition-transform duration-500 group-hover:scale-110`}
        style={
          {
            backgroundImage:
              `linear-gradient(to bottom right, var(--background), color-mix(in srgb, var(--service-color) 100%, transparent), var(--service-color))`,
            "--service-color": color,
          } as CSSProperties
        }
      />
    </motion.article>
  );
}
