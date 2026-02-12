import { useRef, useEffect, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setIsMobile(window.innerWidth < 640);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || isMobile) return;
    if (cursorRef.current == null) return;

    const handleMouseMove = (e) => {
      if (cursorRef.current == null) return;
      cursorRef.current.setAttribute(
        "style",
        "top: " + e.clientY + "px; left: " + e.clientX + "px;"
      );
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <style jsx>{`
        @media (min-width: 640px) {
          .cursor {
            width: 25px;
            height: 25px;
            border: 1px solid white;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: 99999999999;
            background-color: white;
            mix-blend-mode: difference;
          }
        }
      `}</style>
    </>
  );
}
