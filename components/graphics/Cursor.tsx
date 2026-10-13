import React from "react";
interface Cursor {
  className: string;
}
function Cursor({ className = "" }: Cursor) {
  return (
    <svg
      width="100"
      height="80"
      viewBox="-30 -8 110 26"
      fill="none"
      className={className}
    >
      <path
        d="M 0.137 -4.831 C -0.945 -6.018 -5.136 -6.089 -5.9 -2.766 C -7.483 4.119 -8.442 24.366 -6.61 31.917 C -5.841 35.086 -1.725 34.68 0.534 32.56 C 3.72 29.57 6.897 23.914 8.469 24.438 C 8.322 23.703 17.197 26.206 21.372 25.193 C 23.224 24.744 24.173 22.489 24.143 20.773 C 24.047 15.336 4.206 -2.33 0.137 -4.831 Z"
        fill="#111111"
      />
    </svg>
  );
}

export default Cursor;
