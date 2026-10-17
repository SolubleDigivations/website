"use client";

import Navbar from "./Navbar";
import Footer from "@/components/layout/Footer";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isContact = pathname === "/contact";

  useEffect(() => {
    if (isContact) {
      document.documentElement.classList.add("contact-shell");
      return () => {
        document.documentElement.classList.remove("contact-shell");
      };
    }
  }, [isContact]);

  if (isContact) {
    return (
      <main className="h-screen max-h-screen overflow-hidden bg-[#F8F8F5] cursor-default">
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