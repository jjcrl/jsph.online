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
    <div className="flex flex-row w-2/3 m-auto justify-between font-bold mb-16">
      <h5 className="text-pale m-auto">53.4875° N</h5>
      <h5 className="text-pale m-auto">{time}</h5>
      <h5 className="text-pale m-auto">2.2901° W</h5>
    </div>
  );
};

export default Clock;
