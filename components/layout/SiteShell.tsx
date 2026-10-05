"use client";

import Navbar from "./Navbar";
import Footer from "@/components/sections/Footer";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
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