"use client";
import React, { useState } from "react";
import ResponsiveShowcase from "@/components/test/ResponsiveShowcase";
import RotatingCube from "@/components/graphics/RotatingCube";
import { SuccessGraphic } from "@/components/contact/graphics/StepGraphics";
import SuccessScreen from "@/components/contact/SuccessScreen";
import { ContactFormData, INITIAL_FORM_DATA } from "@/components/contact/types";

// export const metadata = {
//   title: "Responsive Showcase | Soluble Digivations",
//   description: "Optimized for every screen size - Desktop, Tablet, and Mobile.",
// };

export default function TestPage() {
   const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  return (
    <main className="min-h-screen bg-[#F8F8F5]">
      <ResponsiveShowcase />
      <SuccessScreen formData={formData} onReset={()=>{}}/>
    </main>
  );
}
