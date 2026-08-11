import React from "react";

// [#1C2C44]

function QuoteBrand() {
  return (
    <section className="bg-black mx-auto mt-4 text-center py-27.5 relative overflow-hidden items-center justify-center flex">
      <div className="absolute top-0 w-full font-outfit-700 text-[260px] text-white opacity-10">
        SOLUBLE
      </div>
      <div className="max-w-310">
        <blockquote className="relative font-outfit-700 text-[#f4f4f2] max-w-210 text-5xl mx-auto">
          Engineering solutions that drive{" "}
          <em className="bg-[#0A92DB] py-1.5 inline-block transform-content -rotate-1 box-content shadow-lg shadow-black my-2.5">
            measurable outcomes
          </em>{" "}
          — not just empty site templates.
        </blockquote>
        <div className="mt-4 text-gray-400">— Value Proposition, Soluble Digivations</div>
      </div>
    </section>
  );
}

export default QuoteBrand;
