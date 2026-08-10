import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-screen w-full flex flex-row justify-center items-center z-10 relative">
      <Image
        src="/assets/backgrounds/bg4.jpg"
        alt="hero"
        fill
        className="w-screen h-full"
        loading="lazy"
      />
      <div className="absolute z-0 inset-x-0 bottom-0 left-0 h-[10%] w-full bg-linear-to-b  from-transparent to-[#f4f4f2] backdrop-blur-none"></div>

      <div className="absolute inset-0 flex flex-col mt-18 md:mt-48 justify-start items-start text-white px-5 sm:px-8 md:px-12 lg:px-20 pt-16 sm:pt-20 md:pt-10">
        {/* Small Heading */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#222222] font-outfit">
          You don't need <span className="text-gray-500">just a Website</span>
        </h1>

        {/* Main Heading */}
        <p className="text-[42px] leading-[105%] sm:text-[58px] md:text-[76px] lg:text-[92px] xl:text-[108px] sm:leading-[100%] font-extrabold mt-3 sm:mt-4 text-[#222222] font-outfit-700">
          You need a⚡{/* Powerful */}
          <span className="relative inline-block z-0">
            <span className="relative z-10">powerful</span>
            <span className="absolute bottom-1 sm:bottom-2 md:bottom-3 lg:bottom-4 left-0 w-full h-[65%] sm:h-[70%] md:h-[75%] lg:h-[80%] bg-blue-400 z-0 rotate-3 origin-top-left"></span>
          </span>{" "}
          {/* Website */}
          <span className="relative inline-block z-0 mr-2 sm:mr-3 md:mr-4">
            <span className="relative z-10">🎨 website</span>
            <span className="absolute bottom-1 sm:bottom-2 md:bottom-3 lg:bottom-4 right-0 w-[75%] h-[65%] sm:h-[70%] md:h-[75%] lg:h-[80%] bg-gray-300/80 z-0 rotate-3 origin-top-left"></span>
          </span>
          for your Brand.
        </p>
      </div>
    </div>
  );
}
