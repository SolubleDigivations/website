"use client";

import Link from "next/link";
import { ArrowUpRight, MenuIcon } from "lucide-react";
import { easeOut, motion } from "motion/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import MagneticButton from "../common/MagneticButton";
import SolubleLogo from "../common/SolubleLogo";
import { usePathname } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";


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

export default function ContactHeader() {
  const pathname = usePathname();

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

  useEffect(() => {
    if (showMenu) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [showMenu]);

  const scrolled = scrollY > 0;
  return (
    <section className="overflow-clip lg:mb-10">
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
        className={`w-full fixed top-1 z-999 border-b-[1.5px] ${scrolled ? "border-gray-400/20" : "border-transparent"}`}
      >
        <nav className="container-soluble flex h-20 items-center justify-between md:h-20 lg:h-18">
          {/* Logo */}
          <div>
            <SolubleLogo />
          </div>

          {/* menu button */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex px-4 h-12 items-center justify-center gap-1 rounded-full bg-white border border-border hover:scale-104 transition-transform duration-200 overflow-hidden cursor-pointer group"
            onClick={() =>
              setShowMenu((prev) => {
                return !prev;
              })
            }
          >
            <div
              className={`text-foreground text-lg flex flex-col ${showMenu ? "-translate-y-6" : "translate-y-3.5"} transition-all duration-200 text-black`}
            >
              <span className="font-medium transition-transform duration-200">Menu</span>
              <span className="translate-y-[9px] transition-transform duration-200">Close</span>
            </div>
            {showMenu ? <IoCloseOutline color="#000000" size={26} className="-mr-1 group-hover:scale-102" /> : <MenuIcon color="#000000" size={20} className="group-hover:scale-102" />}
          </button>
        </nav>
      </motion.header>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </section>
  );
}

function Menu({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div
        className={`${showMenu ? "backdrop-blur-sm" : "backdrop-blur-0 hidden"} h-screen w-full z-500 transition-all duration-800 ${showMenu ? "" : "delay-800"} ease-out `}
        style={
          showMenu
            ? {
              position: "fixed",
              top: 0,
            }
            : {
              position: "fixed",
            }
        }
      ></div>
      <div
        className={` bg-soluble-blue h-screen w-full z-500 transition-all duration-800 ${showMenu ? "" : "delay-300"} ease-out`}
        style={
          showMenu
            ? {
              translate: 800,
              position: "fixed",
              top: 0,
            }
            : {
              position: "fixed",
              translate: 1600,
            }
        }
      ></div>
      <div
        className={` bg-soluble-yellow h-screen w-full z-500 transition-all duration-800 ${showMenu ? "delay-100" : "delay-200"} ease-out`}
        style={
          showMenu
            ? {
              translate: 800,
              position: "fixed",
              top: 0,
            }
            : {
              position: "fixed",
              translate: 1600,
            }
        }
      ></div>
      <div
        className={` bg-soluble-pink h-screen w-full z-500 transition-all duration-800 ${showMenu ? "delay-200" : "delay-75"} ease-out`}
        style={
          showMenu
            ? {
              translate: 800,
              position: "fixed",
              top: 0,
            }
            : {
              position: "fixed",
              translate: 1600,
            }
        }
      ></div>
      <div
        className={`bg-background h-screen w-1/2 z-500 transition-all duration-800 ${showMenu ? "delay-275" : "delay-0"} ease-out flex flex-col justify-center items-center overflow-hidden pb-40`}
        style={
          showMenu
            ? {
              translate: 800,
              position: "fixed",
              top: 0,
            }
            : {
              position: "fixed",
              translate: 1600,
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
            className="group relative text-6xl font-[1000] text-foreground transition-colors duration-100 overflow-hidden pb-2 active:text-soluble-blue tracking-tighter mr-auto ml-40 hover:text-muted-foreground"
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
        <div className="absolute w-1/2 left-40 bottom-20 flex flex-col gap-1">
          <Link
            href={"mailto:solubledigivations@gmail.com"}
            className="flex flex-row gap-1"
          >
            <div className="w-8 h-8 rounded-full border border-border bg-white text-muted-foreground flex justify-center items-center text-xl font-light">
              +
            </div>
            <span className="text-foreground underline-soluble-mint">
              solubledigivations@gmail.com
            </span>
          </Link>
          <p className="text-xs text-muted-foreground/60 ml-14 mt-2">
            © {new Date().getFullYear()} Soluble Digivations.
          </p>
        </div>
      </div>
    </>
  );
}
