"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Step01Graphic } from "./graphics/StepGraphics";
import { ContactFormData } from "./types";

export function Step01Left() {
  return (
    <div className="flex flex-col justify-center">
      {/* Eyebrow badge */}
      <div className="inline-flex w-fit items-center rounded-full bg-soluble-pink/40 px-3 py-1 text-[10px] sm:text-[10px] font-bold uppercase tracking-wider text-foreground/80">
        Let&apos;s get to know you
      </div>

      {/* Heading */}
      <h2 className="mt-2 text-2xl sm:text-4xl lg:text-6xl font-[1000] tracking-tighter text-[#111111] leading-14">
        Tell us
        <br />
        about you<span className="text-[#FF8B68]">.</span>
      </h2>

      {/* Subtitle */}
      <p className="mt-4.5 text-xs sm:text-base font-medium text-muted-foreground/80 leading-relaxed max-w-68">
        A few quick details to get started. This helps us understand you and
        respond better.
      </p>

      {/* Step Graphic */}
      <div className="mt-2 sm:mt-3">
        <Step01Graphic />
      </div>
    </div>
  );
}

interface Step01IntroductionProps {
  formData: ContactFormData;
  updateFormData: (data: Partial<ContactFormData>) => void;
  onNext: () => void;
}

const COUNTRY_CODES = [
  { code: "+91", country: "India" },
  { code: "+1", country: "US/Canada" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+49", country: "Germany" },
  { code: "+971", country: "UAE" },
  { code: "+65", country: "Singapore" },
];

export default function Step01Introduction({
  formData,
  updateFormData,
  onNext,
}: Step01IntroductionProps) {
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your work email.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onNext();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 relative mt-18"
      autoComplete="on"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 20, delay: 0.3 }}
        className="absolute right-[-8%] top-[-20%] text-right -rotate-12 z-20"
      >
        <span className="font-caveat text-sm sm:text-base font-bold text-[#111111] leading-tight block uppercase">
          Good
          <br />
          Ideas
          <br />
          Start
          <br />
          Here. —
        </span>
      </motion.div>
      <motion.svg
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
        className="pointer-events-none absolute right-[-40%] top-[-12%] z-10 w-60 h-60"
        viewBox="163 0 184 193"
        fill="none"
      >
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            x1="258.812"
            y1="34.369"
            x2="258.812"
            y2="178.233"
            id="gradient-0"
            gradientTransform="matrix(0.675219, 0.737617, -0.675083, 0.617976, 129.845196, -163.469775)"
          >
            <stop offset="0" stopColor="#FF91D4" />
            <stop offset="100%" stopColor="#F8F8F5" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient-0)"
          d="M 325.483 126.971 C 321.018 150.688 320.778 189.473 254.272 177.389 C 187.766 165.305 244.918 108.879 220.92 103.695 C 146.243 87.564 231.055 11.713 281.337 41.046 C 331.619 70.379 326.666 103.317 325.483 126.971 Z"
        />
      </motion.svg>
      {/* YOUR NAME * */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
          Your Name <span className="text-[#FF8B68]">*</span>
        </label>
        <input
          type="text"
          value={formData.name}
          autoComplete="name"
          name="name"
          onChange={(e) => {
            updateFormData({ name: e.target.value });
            if (errors.name)
              setErrors((prev) => ({ ...prev, name: undefined }));
          }}
          placeholder="John Doe"
          className={`w-full px-4 py-2.5 sm:py-3 rounded-md bg-white border ${
            errors.name
              ? "border-red-400 focus:ring-red-300"
              : "border-[#E7E7E2] focus:border-[#111111]"
          } text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all shadow-xs`}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>
        )}
      </div>

      {/* WORK EMAIL * */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
          Work Email <span className="text-[#FF8B68]">*</span>
        </label>
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={(e) => {
            updateFormData({ email: e.target.value });
            if (errors.email)
              setErrors((prev) => ({ ...prev, email: undefined }));
          }}
          placeholder="you@company.com"
          className={`w-full px-4 py-2.5 sm:py-3 rounded-md bg-white border ${
            errors.email
              ? "border-red-400 focus:ring-red-300"
              : "border-[#E7E7E2] focus:border-[#111111]"
          } text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all shadow-xs`}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500 font-medium">
            {errors.email}
          </p>
        )}
      </div>

      {/* PHONE (OPTIONAL) */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
          Phone (Optional)
        </label>
        <div className="flex gap-2 sm:gap-2.5">
          {/* Country Code Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowCountryPicker((prev) => !prev)}
              className="flex items-center gap-4 px-3 py-2.5 sm:py-3 rounded-md bg-white border border-[#E7E7E2] text-sm font-semibold text-foreground hover:bg-neutral-50 transition-colors shadow-xs"
            >
              <span>{formData.phoneCountryCode || "+91"}</span>
              <ChevronDown size={14} className="text-muted-foreground" />
            </button>

            {showCountryPicker && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-[#E7E7E2] rounded-md shadow-xl z-30 py-1 max-h-48 overflow-y-auto">
                {COUNTRY_CODES.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      updateFormData({ phoneCountryCode: item.code });
                      setShowCountryPicker(false);
                    }}
                    className="w-full text-left px-3.5 py-1.5 text-xs font-medium hover:bg-neutral-100 flex items-center justify-between"
                  >
                    <span>{item.country}</span>
                    <span className="text-muted-foreground font-mono">
                      {item.code}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Phone Input */}
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => updateFormData({ phone: e.target.value })}
            placeholder="98765 43210"
            className="flex-1 px-4 py-2.5 sm:py-3 rounded-md bg-white border border-[#E7E7E2] text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-black/5 transition-all shadow-xs"
          />
        </div>
      </div>

      {/* COMPANY (OPTIONAL) */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
          Company (Optional)
        </label>
        <input
          type="text"
          name="company"
          autoComplete="company name"
          value={formData.company}
          onChange={(e) => updateFormData({ company: e.target.value })}
          placeholder="Your company"
          className="w-full px-4 py-2.5 sm:py-3 rounded-md bg-white border border-[#E7E7E2] text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-black/5 transition-all shadow-xs"
        />
      </div>

      {/* Submit Action */}
      <div className="pt-1 flex items-center gap-4 mt-10">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-17 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-black transition-colors cursor-pointer"
        >
          <span>Continue</span>
          <ArrowRight size={15} />
        </motion.button>
        <span className="text-xs text-muted-foreground/70">
          or press Enter ↵
        </span>
      </div>
    </form>
  );
}
