"use client";

import { useState } from "react";

import ResponsiveShowcase from "@/components/test/ResponsiveShowcase";
import SuccessScreen from "@/components/contact/SuccessScreen";
import { ContactFormData, INITIAL_FORM_DATA } from "@/components/contact/types";

export default function TestPageContent() {
  const [formData] = useState<ContactFormData>(INITIAL_FORM_DATA);

  return (
    <>
      <ResponsiveShowcase />
      <SuccessScreen isMobile={false} formData={formData} onReset={() => {}} />
    </>
  );
}
