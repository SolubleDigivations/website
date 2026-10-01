"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import { testimonials } from "@/lib/testimonials";

export default function TestimonialsPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container-soluble">

        {/* Section heading */}
        <div className="grid gap-6 md:grid-cols-[1fr_0.6fr] md:items-end">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-border bg-soluble-blue/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Testimonials
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-4 text-5xl font-bold leading-[0.92] tracking-[-0.065em] md:text-6xl">
                What clients say
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground md:justify-self-end">
              We work closely with our clients to create
              solutions that deliver real value.
            </p>
          </Reveal>
        </div>

        {/* Testimonial */}
        <Reveal delay={0.18}>
          <div className="relative mt-10">
            
            {/* Previous */}
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-transform duration-300 hover:-translate-x-[55%] md:h-12 md:w-12"
            >
              <ArrowLeft size={18} />
            </button>

            {/* Card */}
            <div className="overflow-hidden rounded-2xl border border-border bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -25,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="grid min-h-[230px] items-center gap-8 px-8 py-10 md:grid-cols-[1fr_auto] md:px-14 md:py-12"
                >

                  {/* Quote */}
                  <div className="flex gap-5">
                    <Quote
                      size={25}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-muted-foreground"
                    />

                    <blockquote className="max-w-3xl text-xl font-medium leading-[1.3] tracking-[-0.025em] md:text-2xl">
                      “{activeTestimonial.quote}”
                    </blockquote>
                  </div>

                  {/* Client */}
                  <div className="min-w-[150px]">
                    <p className="text-sm font-semibold">
                      {activeTestimonial.client}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {activeTestimonial.company}
                    </p>

                    <div
                      className="mt-4 flex gap-1"
                      aria-label={`${activeTestimonial.rating} out of 5 stars`}
                    >
                      {Array.from({
                        length: activeTestimonial.rating,
                      }).map((_, index) => (
                        <Star
                          key={index}
                          size={14}
                          fill="#FFD65A"
                          strokeWidth={0}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next */}
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 z-20 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-transform duration-300 hover:translate-x-[55%] md:h-12 md:w-12"
            >
              <ArrowRight size={18} />
            </button>

          </div>
        </Reveal>

        {/* Progress */}
        <div className="mt-6 flex justify-center gap-1.5">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className="group p-1"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 bg-[#111111]"
                    : "w-1.5 bg-[#E7E7E2] group-hover:bg-[#6B6B6B]"
                }`}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}