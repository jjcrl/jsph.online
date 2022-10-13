import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState();

  const updateClock = () => {
    setTime(new Date().toLocaleTimeString().slice(0, 5));
  };

  useEffect(() => {
    const timerID = setInterval(() => updateClock(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });
  return <h6>{time}.GMT</h6>;
};

export default Clock;
