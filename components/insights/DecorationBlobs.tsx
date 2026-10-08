import React from "react";

function DecorationBlobs() {
  return (
    <>
      <div className="pointer-events-none absolute -right-24 top-10 h-40 w-40 rounded-full bg-soluble-yellow/60 md:h-56 md:w-56" />
      <div className="pointer-events-none absolute -left-16 bottom-7 h-48 w-48 rounded-full bg-soluble-purple/40 md:h-72 md:w-72 z-50" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-52 w-52 rounded-[45%] bg-soluble-mint/40 md:h-72 md:w-72" />
    </>
  );
}

export default DecorationBlobs;
