import { useRef, useEffect } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;
    document.addEventListener("mousemove", (e) => {
      if (cursorRef.current == null) return;
      cursorRef.current.setAttribute(
        "style",
        "top: " + e.clientY + "px; left: " + e.clientX + "px;"
      );
    });
  }, []);
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
