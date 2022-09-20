import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState();

  const updateClock = () => {
    setTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    const timerID = setInterval(() => updateClock(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });
  return (
    <div className="flex flex-row w-2/3 m-auto justify-center relative -bottom-20">
      <h6 className="text-ink m-auto">53.4875° N</h6>
      <h6 className="text-ink m-auto">{time}</h6>
      <h6 className="text-ink m-auto">2.2901° W</h6>
    </div>
  );
};

export default Clock;
