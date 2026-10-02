import React from "react";
import Reveal from "../motion/Reveal";

// [#1C2C44]

function QuoteBrand() {
  return (
    <section className="bg-linear-to-br from-soluble-blue via-soluble-mint to-soluble-yellow mx-auto mt-4 text-center py-10 md:py-16 lg:py-27.5 relative overflow-hidden items-center justify-center flex">
      <div className="absolute top-0 w-full font-outfit font-bold text-[120px] md:text-[180px] lg:text-[260px] text-white opacity-20">
        SOLUBLE
      </div>
      <div className="w-[70%]">
        <Reveal>
        <blockquote className="relative font-outfit font-semibold text-[#f4f4f2] w-[80%] md:w-[75%] lg:w-[70%] text-xl md:text-3xl lg:text-5xl mx-auto">
          
          Engineering solutions that drive{" "}
          <em className="bg-[#0A92DB] py-0.5 lg:py-1.5 inline-block transform-content -rotate-1 box-content shadow-lg shadow-black my-1 md:my-1.5 lg:my-2.5">
            measurable outcomes
          </em>{" "}
          — not just empty site templates.
        </blockquote>
        <div className="mt-4 text-gray-600 text-sm md:text-lg">— Value Proposition, Soluble Digivations</div>
        </Reveal>
      </div>
    </section>
  );
}

export default QuoteBrand;
