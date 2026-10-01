"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface ProjectVisualProps {
  project: "stoneza" | "cineverse";
}

export default function ProjectVisual({
  project,
}: ProjectVisualProps) {
  if (project === "stoneza") {
    return <StonezaVisual />;
  }

  return <CineVerseVisual />;
}

function StonezaVisual() {
  return (
    <div className="relative h-full min-h-[440px] overflow-hidden bg-[#EDEDE8]">
      {/* Background stone image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/projects/stoneza/stoneza-homepage.png"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
      </div>

      {/* Decorative wash */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Laptop */}
      <motion.div
        className="absolute left-[18%] top-[12%] w-[78%]"
        whileHover={{
          y: -8,
          rotate: -1,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border-[6px] border-[#171717] bg-[#171717] shadow-2xl">
          <Image
            src="/assets/images/projects/stoneza/stoneza-homepage-fit.png"
            alt="Stoneza website"
            fill
            sizes="50vw"
            className="object-cover object-top"
          />
        </div>

        {/* Laptop base */}
        <div className="mx-auto h-3 w-[108%] -translate-x-[4%] rounded-b-xl bg-[#222]" />
      </motion.div>

      {/* Accent shape */}
      <div className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-soluble-purple/70 blur-[1px]" />
    </div>
  );
}

function CineVerseVisual() {
  return (
    <div className="relative h-full min-h-[440px] overflow-hidden bg-[#EEEDE8]">
      {/* Accent circles */}
      <div className="absolute -bottom-16 left-8 h-48 w-48 rounded-full bg-soluble-yellow" />

      <div className="absolute right-[-40px] top-16 h-48 w-48 rounded-full bg-soluble-purple" />

      {/* Phone 1 */}
      <motion.div
        className="absolute left-[25%] top-[12%] w-[27%] rotate-[-8deg]"
        whileHover={{
          y: -10,
          rotate: -10,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <PhoneImage
          src="/assets/images/projects/stoneza/cineverse-1.jpg"
          alt="CineVerse home screen"
        />
      </motion.div>

      {/* Phone 2 */}
      <motion.div
        className="absolute left-[48%] top-[7%] w-[27%] rotate-[7deg]"
        whileHover={{
          y: -12,
          rotate: 9,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <PhoneImage
          src="/assets/images/projects/stoneza/cineverse-2.jpg"
          alt="CineVerse movie screen"
        />
      </motion.div>

      {/* Scribble */}
    </div>
  );
}

interface PhoneImageProps {
  src: string;
  alt: string;
}

function PhoneImage({
  src,
  alt,
}: PhoneImageProps) {
  return (
    <div className="relative aspect-[9/19] overflow-hidden rounded-[1.6rem] border-[5px] border-[#111] bg-black shadow-2xl">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="20vw"
        className="object-cover"
      />
    </div>
  );
}