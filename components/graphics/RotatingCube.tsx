import React from "react";

function RotatingCube() {
  return (
    <div className="flex aspect-square w-[200px] items-center justify-center perspective-[700px] scale-[0.35]">
      <div className="relative aspect-square w-full transform-3d animate-cube">
        <div className="cube-face absolute flex aspect-square w-full items-center justify-center bg-linear-to-br from-background to-80% to-soluble-blue -translate-y-[118px] rotate-x-90">
          {/* Top*/}
        </div>
        <div className="cube-face absolute flex aspect-square w-full items-center justify-center bg-linear-to-br from-background to-80% to-soluble-purple translate-y-[118px] -rotate-x-90">
          {/* Bottom */}
        </div>
        <div className="cube-face absolute flex aspect-square w-full items-center justify-center bg-linear-to-br from-background to-80% to-soluble-yellow -translate-x-[118px] -rotate-y-90">
          {/* Left */}
        </div>
        <div className="cube-face absolute flex aspect-square w-full items-center justify-center bg-linear-to-br from-background to-80% to-soluble-mint translate-x-[118px] rotate-y-90">
          {/* Right */}
        </div>
        <div className="cube-face absolute flex aspect-square w-full items-center justify-center bg-linear-to-br from-background to-80% to-soluble-pink translate-z-[118px]">
          {/* Front */}
        </div>
        <div className="cube-face absolute flex aspect-square w-full items-center justify-center bg-linear-to-br from-background to-80% to-orange-400 -translate-z-[118px] rotate-y-180">
          {/* Back */}
        </div>
      </div>
    </div>
  );
}

export default RotatingCube;
