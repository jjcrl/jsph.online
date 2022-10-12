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
  return (
    <div className="flex flex-col w-fit h-fit gap-2 font-bold text-right justify-between">
      <h5 className="text-neutral-300">53.4875°N</h5>
      <h5 className="text-neutral-400">02.2901°W</h5>
      <h5 className="text-neutral-500 leading-none">{time}GMT</h5>
    </div>
  );
};

export default Clock;
