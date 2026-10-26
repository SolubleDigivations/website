"use client";
import React from "react";
import { IconType } from "react-icons";
import Reveal from "../motion/Reveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { easeIn, motion } from "motion/react";
import MagneticButton from "../common/MagneticButton";
import Image from "next/image";

interface ServiceCardProps {
  imageClassName?: string;
  index: number;
  title: string;
  subtitle: string;
  icon: IconType;
  color: string;
  list: readonly string[];
  id: string;
  image: string;
}

function ServicesSections({
  imageClassName,
  index,
  id,
  title,
  subtitle,
  icon: ServiceIcon,
  color,
  list,
  image,
}: ServiceCardProps) {
  return (
    <div
      id={id}
      className="min-h-[90vh] scroll-m-20 py-12 lg:h-[90vh] lg:min-h-0 lg:py-0 relative"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0">
        <div className="relative z-40 flex-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.4,
              ease: easeIn,
            }}
            className="relative z-50 w-full bg-linear-to-l from-transparent to-15% to-background px-4 sm:max-w-xl"
          >
            <div className="my-4 font-bold text-muted-foreground">
              <span className="text-soluble-blue mx-2">0{index}</span>/
              <span className="text-muted-foreground mx-2">06</span>
            </div>
            <div className="my-4">
              <Reveal delay={0.2}>
                <h1 className="text-5xl font-black tracking-tighter sm:text-6xl w-full lg:w-100">
                  {title}
                </h1>
              </Reveal>
            </div>
            <div className="mb-4 w-full lg:w-150">
              <Reveal delay={0.4}>
                <p className="text-xl">{subtitle}</p>
              </Reveal>
            </div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#111111] px-4 py-3 text-xs font-semibold text-white transition-transform duration-300"
                >
                  Start a project
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:scale-110"
                    />
                  </span>
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-3 rounded-full border border-border bg-white px-4 py-3 text-xs font-bold text-foreground transition-all duration-300 hover:border-foreground"
                >
                  View case studies
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-xs transition-transform duration-300 group-hover:rotate-[-45deg]">
                    ↓
                  </span>
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
          <div className="absolute right-5 top-0 z-20 hidden w-[90%] text-right uppercase lg:block">
            <h1 className="text-9xl font-extrabold text-muted">
              {title.substring(0, title.indexOf(" "))}
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{once:false}}
            transition={{ duration: 0.4, delay: 0.6, ease: easeIn }}
            className="relative h-full"
          >
            <Image
              src={image}
              height={800}
              width={800}
              alt={title}
              quality={1}
              className={imageClassName}
            />
          </motion.div>
        </div>
        <div className="z-40 lg:shrink-0">
          <div className="my-4 font-bold">
            <Reveal delay={0.2}>What's Included</Reveal>
          </div>
          <ul className="space-y-2">
            {list.map((listItem, liIndex) => (
              <Reveal key={liIndex} delay={0.2 + liIndex * 0.05}>
                <li className="flex gap-2 items-center text-muted-foreground font-semibold">
                  <span className="border border-border size-8 text-sm rounded-full bg-white flex justify-center items-center">
                    0{liIndex + 1}
                  </span>
                  {listItem}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServicesSections;
