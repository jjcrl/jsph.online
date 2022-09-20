import { useEffect, useState } from "react";

const WelcomeSVG = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const timerID = setInterval(() => addcircle(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const rPosition = () => {
    const maxCX = 180;
    const maxCY = 100;
    const rCX = Math.floor(Math.random() * maxCX);
    const rCY = Math.floor(Math.random() * maxCY);
    return { rCX, rCY };
  };

  const addcircle = () => {
    const newCircle = (
      <circle r={1.65} cx={rPosition().rCX} cy={rPosition().rCY} fill="white" />
    );
    setCircles((...circles) => [...circles, newCircle]);
  };

  return (
    <svg
      viewBox="0 0 196 104"
      xmlns="http://www.w3.org/2000/svg"
      className="m-auto mix-blend-difference bg-transparent"
    >
      <g>{circles.map((circle) => circle)}</g>
    </svg>
  );
};

export default WelcomeSVG;
