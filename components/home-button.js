import React, { useEffect } from "react";

export const HomeButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <svg
      id="home-button"
      height={100}
      width={100}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          id="textcircle-home"
          d="M10,55a40,40 0 1,0 80,0a40,40 0 1,0 -80,0"
        />
      </defs>

      <text
        dy={-6}
        dx={3}
        style={{
          fontFamily: "GT Maru Trial",
          fontSize: "1.4rem",
        }}
      >
        <textPath textLength="230" href="#textcircle-home">
          <a href={href} onClick={onClick} ref={ref}>
            JSPH.DEV
          </a>
        </textPath>
      </text>
    </svg>
  );
});
