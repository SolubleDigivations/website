"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { easeIn, easeInOut, easeOut, motion } from "motion/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import MagneticButton from "../common/MagneticButton";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
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
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrolled = scrollY > 0;
  return (
    <section className="overflow-clip">
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
        className={`w-full fixed backdrop-blur-sm top-0 z-999 border-b-[1.5px] ${scrolled ? "border-gray-400/20" : "border-transparent"}`}
      >
        <nav className="container-soluble flex h-20 items-center justify-between md:h-20 lg:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center"
            aria-label="Soluble Digivations home"
          >
            <Image
              src={"/assets/images/logo/logo-6.png"}
              alt="Soluble Digital Innovation"
              width={90}
              height={90}
              className="w-10 md:w-12 aspect-square h-auto"
            />
            <span className="flex items-center mt-auto -ml-2 gap-1.5  text-2xl md:text-3xl font-bold tracking-[-0.06em]">
              {/* <span className="relative h-8 w-8 overflow-hidden rounded-full bg-[#ff7857]">
              <span className="absolute -right-1 -top-1 h-6 w-6 rounded-full bg-soluble-purple" />
              <span className="absolute -bottom-1 -left-1 h-6 w-6 rounded-full bg-soluble-yellow" />
            </span> */}
              oluble
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
          <MagneticButton>
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-[16px] font-semibold text-background transition-transform duration-300 hover:scale-[1.04] md:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight size={13} />
            </Link>
          </MagneticButton>

          {/* Mobile menu */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
            onClick={() =>
              setShowMenu((prev) => {
                return !prev;
              })
            }
          >
            <span className="flex w-4 flex-col gap-1.5">
              <span
                className="h-px w-full bg-foreground transition-all duration-200 ease-out"
                style={
                  showMenu
                    ? {
                        transform: "translateY(5px) rotate(45deg)",
                      }
                    : {}
                }
              />
              <span
                className="h-px w-full bg-foreground transition-all duration-200 ease-out"
                style={
                  showMenu
                    ? {
                        transform: "translateY(-2px) rotate(-45deg)",
                      }
                    : {}
                }
              />
            </span>
          </button>
        </nav>
      </motion.header>
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
    </section>
  );
}

function MobileMenu({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div
        className={` bg-soluble-blue h-screen w-full z-500 md:hidden transition-all duration-800 ${showMenu ? "" : "delay-300"} ease-out`}
        style={
          showMenu
            ? {
                translate: 0,
                position: "fixed",
                top: 0,
              }
            : {
                position: "fixed",
                translate: 500,
              }
        }
      ></div>
      <div
        className={` bg-soluble-yellow h-screen w-full z-500 md:hidden transition-all duration-800 ${showMenu ? "delay-100" : "delay-200"} ease-out`}
        style={
          showMenu
            ? {
                translate: 0,
                position: "fixed",
                top: 0,
              }
            : {
                position: "fixed",
                translate: 500,
              }
        }
      ></div>
      <div
        className={` bg-soluble-pink h-screen w-full z-500 md:hidden transition-all duration-800 ${showMenu ? "delay-200" : "delay-75"} ease-out`}
        style={
          showMenu
            ? {
                translate: 0,
                position: "fixed",
                top: 0,
              }
            : {
                position: "fixed",
                translate: 500,
              }
        }
      ></div>
      <div
        className={`bg-background h-screen w-full z-500 md:hidden transition-all duration-800 ${showMenu ? "delay-275" : "delay-0"} ease-out flex flex-col justify-center items-center space-y-1 overflow-hidden pb-24`}
        style={
          showMenu
            ? {
                translate: 0,
                position: "fixed",
                top: 0,
              }
            : {
                position: "fixed",
                translate: 500,
              }
        }
      >
        {navLinks.map((link, index) => (
          <Link
            key={link.href}
            onClick={() => {
              setShowMenu(false);
            }}
            href={link.href}
            className="group relative text-5xl font-[1000] text-foreground transition-colors duration-300 overflow-hidden pb-2 active:text-soluble-blue"
          >
            <motion.div
              initial={{ y: 52 }}
              whileInView={{ y: 0 }}
              transition={{
                delay: 0.08 * index,
                duration: 0.2,
                ease: easeOut,
              }}
              className=""
            >
              {link.label}
            </motion.div>
          </Link>
        ))}
        <div className="absolute w-screen bottom-12 flex flex-col gap-1">
          <Link
            href="/contact"
            className="inline-flex w-32 mx-auto items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-[16px] font-semibold text-background transition-transform duration-300 hover:scale-[1.04] justify-center mb-4"
          >
            Let&apos;s talk
            <ArrowUpRight size={13} />
          </Link>
          <Link
            href={"mailto:solubledigivations@gmail.com"}
            className="mx-auto flex flex-row gap-1"
          >
            <div className="w-8 h-8 rounded-full border border-border bg-white text-muted-foreground flex justify-center items-center text-xl font-light">
              +
            </div>
            <span className="text-foreground underline-soluble-mint ">
              solubledigivations@gmail.com
            </span>
          </Link>
          <p className="text-xs text-muted-foreground/60 mx-auto mt-2">
            © {new Date().getFullYear()} Soluble Digivations.
          </p>
        </div>
      </div>
    </>
  );
}
