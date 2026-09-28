"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Process",
    href: "/process",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Insights",
    href: "/insights",
  },
];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  const scrolled=scrollY>0;
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`w-full fixed backdrop-blur-sm top-0 z-999 border-b-[1.5px] ${scrolled? 'border-gray-400/20' : 'border-transparent'}`}
    >
      <nav className="container-soluble flex h-20 items-center justify-between md:h-20 lg:h-18">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center"
          aria-label="Soluble Digivations home"
        >
          <span className="flex items-center gap-1.5 text-xl font-bold tracking-[-0.06em]">
            <span className="relative h-3 w-3 overflow-hidden rounded-full bg-[#ff7857]">
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#55c7ff]" />
              <span className="absolute -bottom-1 -left-1 h-3 w-3 rounded-full bg-soluble-yellow" />
            </span>
            Soluble
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-[16px] font-semibold text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}

              <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-right scale-x-0 bg-foreground transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* Contact */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-[16px] font-semibold text-background transition-transform duration-300 hover:scale-[1.04] md:inline-flex"
        >
          Let&apos;s talk
          <ArrowUpRight size={13} />
        </Link>

        {/* Mobile menu */}
        <button
          type="button"
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
        >
          <span className="flex w-4 flex-col gap-1.5">
            <span className="h-px w-full bg-foreground" />
            <span className="h-px w-full bg-foreground" />
          </span>
        </button>
      </nav>
    </motion.header>
  );
}
