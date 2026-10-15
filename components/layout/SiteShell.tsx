"use client";

import Navbar from "./Navbar";
import Footer from "@/components/layout/Footer";
import { usePathname } from "next/navigation";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isContact = pathname === "/contact";

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