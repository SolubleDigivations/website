"use client";

import Navbar from "./Navbar";
import Footer from "@/components/layout/Footer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isContact = pathname === "/contact";
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 767px)");
  
      const handleChange = (event: MediaQueryList | MediaQueryListEvent) => {
        setIsMobile(event.matches);
      };
  
      handleChange(mediaQuery);
      mediaQuery.addEventListener("change", handleChange);
  
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }, []);

  useEffect(() => {
    if (!isMobile && isContact) {
      document.documentElement.classList.add("contact-shell");
      return () => {
        document.documentElement.classList.remove("contact-shell");
      };
    }
  }, [isContact, isMobile]);

  if (isContact) {
    return (
      <main className="min-h-svh overflow-x-clip bg-[#F8F8F5] cursor-default lg:h-screen lg:max-h-screen lg:overflow-hidden">
        {children}
      </main>
    );
  }

  return (
    <>
      <Navbar />

      <div className="pt-[80px] lg:pt-[72px] cursor-default">
        {children}
      </div>

      <Footer />
    </>
  );
}