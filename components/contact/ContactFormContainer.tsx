"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import ProgressBar from "./ProgressBar";
import ContactHeader from "./ContactHeader";
import EntryScreen from "./EntryScreen";
import Step01Introduction, { Step01Left } from "./Step01Introduction";
import Step02Services, { Step02Left } from "./Step02Services";
import Step03Scope, { Step03Left } from "./Step03Scope";
import Step04Business, { Step04Left } from "./Step04Business";
import Step05Files, { Step05Left } from "./Step05Files";
import Step06Final, { Step06Left } from "./Step06Final";
import SuccessScreen from "./SuccessScreen";
import { ContactFormData, FormStep, INITIAL_FORM_DATA } from "./types";
import Navbar from "../layout/Navbar";

export default function ContactFormContainer() {
  const [currentStep, setCurrentStep] = useState<FormStep>("entry");
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleChange = (event: any) => {
      setIsMobile(event.matches);
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const updateFormData = (patch: Partial<ContactFormData>) => {
    setFormData((prev) => ({ ...prev, ...patch }));
  };

  // Check if user has entered anything (for exit confirmation warning)
  const isDirty = Boolean(
    formData.name ||
    formData.email ||
    formData.company ||
    (formData.services && formData.services.length > 0) ||
    formData.budget ||
    formData.timeline ||
    formData.primaryGoal ||
    formData.primaryUsers ||
    formData.industry ||
    formData.businessDescription ||
    (formData.files && formData.files.length > 0) ||
    formData.additionalMessage,
  );

  // Step transitions
  const goToStep = (step: FormStep) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentStep(step);
  };

  const handleJumpToStep = (stepNumber: number) => {
    const stepMap: Record<number, FormStep> = {
      1: "step1",
      2: "step2",
      3: "step3",
      4: "step4",
      5: "step5",
      6: "step6",
    };
    if (stepMap[stepNumber]) {
      goToStep(stepMap[stepNumber]);
    }
  };

  // Final Submission
  const handleSubmitBrief = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const uploadedFiles = [];
      for (const item of formData.files || []) {
        const uploadResponse = await fetch("/api/contact/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: item.name,
            size: item.size,
            type: item.type,
          }),
        });
        const uploadResult = await uploadResponse.json().catch(() => null);
        if (
          !uploadResponse.ok ||
          !uploadResult?.success ||
          !uploadResult.upload
        ) {
          throw new Error(
            uploadResult?.error || "Unable to prepare an attachment.",
          );
        }

        const storageResponse = await fetch(uploadResult.upload.signedUrl, {
          method: "PUT",
          headers: { "Content-Type": item.type },
          body: item.file,
        });
        if (!storageResponse.ok) {
          throw new Error(`Unable to upload "${item.name}". Please try again.`);
        }

        uploadedFiles.push({
          name: item.name,
          size: item.size,
          type: item.type,
          path: uploadResult.upload.path,
          uploadToken: uploadResult.upload.token,
        });
      }

      const payloadData = {
        name: formData.name,
        email: formData.email,
        phoneCountryCode: formData.phoneCountryCode,
        phone: formData.phone,
        company: formData.company,
        services: formData.services,
        otherServices: formData.otherServices,
        budget: formData.budget,
        timeline: formData.timeline,
        primaryGoal: formData.primaryGoal,
        specialRequirements: formData.specialRequirements,
        primaryUsers: formData.primaryUsers,
        industry: formData.industry,
        businessDescription: formData.businessDescription,
        projectObjectives: formData.projectObjectives,
        referenceLinks: formData.referenceLinks,
        additionalMessage: formData.additionalMessage,
        files: uploadedFiles,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadData),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.error || "Failed to submit enquiry. Please try again.",
        );
      }

      // Transition to success screen
      goToStep("success");
    } catch (err: unknown) {
      console.error("Submission failed:", err);
      const msg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again.";
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
    goToStep("entry");
  };

  // Creative drawing & sketch animation variants for step illustrations and left-column graphics
  const creativeGraphicVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0.88,
      y: 18,
      rotate: -2.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 280,
        damping: 24,
        mass: 0.85,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.92,
      y: -16,
      rotate: 2.5,
      transition: {
        duration: 0.28,
        ease: [0.32, 0, 0.67, 0] as const,
      },
    },
  };

  // Creative transition for Entry and Success screens
  const entryScreenVariants: Variants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: {
      opacity: 0,
      scale: 0.94,
      y: -20,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  // Form input field slide variants
  const formVariants: Variants = {
    initial: { opacity: 0, x: 16 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: {
      opacity: 0,
      x: -14,
      transition: { duration: 0.22, ease: "easeIn" as const },
    },
  };

  const isFormStep =
    currentStep === "step1" ||
    currentStep === "step2" ||
    currentStep === "step3" ||
    currentStep === "step4" ||
    currentStep === "step5" ||
    currentStep === "step6";

  const currentStepNumber =
    {
      step1: 1,
      step2: 2,
      step3: 3,
      step4: 4,
      step5: 5,
      step6: 6,
    }[
      currentStep as "step1" | "step2" | "step3" | "step4" | "step5" | "step6"
    ] || 1;

  return (
    <div className="min-h-full w-full overflow-x-clip flex flex-col justify-between lg:h-full lg:overflow-hidden">
      {/* If on step1 to step6, render consistent Header */}
      {isMobile ? <Navbar /> : <ContactHeader />}

      {/* Main Container for Active Step */}
      <div className="flex-1 flex flex-col justify-start pt-20 pb-8 lg:justify-center lg:pt-0 lg:pb-0">
        <AnimatePresence mode="popLayout">
          {currentStep === "entry" && (
            <motion.div
              key="entry"
              variants={entryScreenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full min-h-full"
            >
              <EntryScreen onStart={() => goToStep("step1")} />
            </motion.div>
          )}

          {currentStep === "success" && (
            <motion.div
              key="success"
              variants={entryScreenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full min-h-full"
            >
              <SuccessScreen formData={formData} onReset={handleReset} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Steps 1 to 6: Shared 2-column layout with FIXED Stepper */}
        {isFormStep && (
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-4 sm:py-6 lg:py-1">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start lg:items-center">
              {/* Left Column: Heading & Creative Drawing Illustration */}
              <div className="lg:col-span-5 flex flex-col justify-center min-w-0 max-w-xl mx-auto w-full lg:max-w-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`left-${currentStep}`}
                    variants={creativeGraphicVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {currentStep === "step1" && <Step01Left />}
                    {currentStep === "step2" && <Step02Left />}
                    {currentStep === "step3" && <Step03Left />}
                    {currentStep === "step4" && <Step04Left />}
                    {currentStep === "step5" && <Step05Left />}
                    {currentStep === "step6" && <Step06Left />}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column: Persistent Stepper + Animated Form Fields */}
              <div className="lg:col-span-7 flex flex-col justify-center max-w-2xl w-full mx-auto lg:mx-0 min-w-0">
                {/* FIXED STEPPER: Completely stationary during step transitions */}
                <div className="mb-2">
                  <ProgressBar currentStep={currentStepNumber} totalSteps={6} />
                </div>

                {/* Step Form: Animated transition */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`form-${currentStep}`}
                    variants={formVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full"
                  >
                    {currentStep === "step1" && (
                      <Step01Introduction
                        formData={formData}
                        updateFormData={updateFormData}
                        onNext={() => goToStep("step2")}
                      />
                    )}
                    {currentStep === "step2" && (
                      <Step02Services
                        formData={formData}
                        updateFormData={updateFormData}
                        onNext={() => goToStep("step3")}
                        onBack={() => goToStep("step1")}
                        onSkip={() => goToStep("step3")}
                      />
                    )}
                    {currentStep === "step3" && (
                      <Step03Scope
                        formData={formData}
                        updateFormData={updateFormData}
                        onNext={() => goToStep("step4")}
                        onBack={() => goToStep("step2")}
                        onSkip={() => goToStep("step4")}
                      />
                    )}
                    {currentStep === "step4" && (
                      <Step04Business
                        formData={formData}
                        updateFormData={updateFormData}
                        onNext={() => goToStep("step5")}
                        onBack={() => goToStep("step3")}
                        onSkip={() => goToStep("step5")}
                      />
                    )}
                    {currentStep === "step5" && (
                      <Step05Files
                        formData={formData}
                        updateFormData={updateFormData}
                        onNext={() => goToStep("step6")}
                        onBack={() => goToStep("step4")}
                        onSkip={() => goToStep("step6")}
                      />
                    )}
                    {currentStep === "step6" && (
                      <Step06Final
                        formData={formData}
                        updateFormData={updateFormData}
                        onSubmit={handleSubmitBrief}
                        onBack={() => goToStep("step5")}
                        onSkip={handleSubmitBrief}
                        onJumpToStep={handleJumpToStep}
                        isSubmitting={isSubmitting}
                        submitError={submitError}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Spacing bottom for form screens */}
      {isFormStep && <div className="h-6 shrink-0" />}
    </div>
  );
}
