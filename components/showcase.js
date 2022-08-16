import { useContext, useEffect, useState } from "react";
import { SmoothScrollContext } from "../src/contexts/SmoothScroll.context";

const ShowCase = ({ works }) => {
  const { scroll } = useContext(SmoothScrollContext);
  const [currColor, setCurrColor] = useState();

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", (obj) => {
        const elements = obj.currentElements;

        console.log(elements);

        if (elements) {
          if (elements["rose-500"]) {
            setCurrColor("rose-500");
          }
          if (elements["yellow-400"] && elements["yellow-400"].progress > 0.2) {
            setCurrColor("yellow-400");
          }
          if (elements["green-700"] && elements["green-700"].progress > 0.2) {
            setCurrColor("green-700	");
          }
        }
      });
    }
  }, [scroll]);

  return (
    <>
      <section
        className="w-screen flex flex-row relative justify-items-end"
        data-scroll-section
        id="target"
        data-scroll-id="target"
      >
        <div
          className={`w-2/4	 h-screen bg-${currColor}`}
          data-scroll
          data-scroll-sticky
          data-scroll-target="#target"
        >
          <div className="flex flex-col h-screen p-40 justify-between">
            <p>tags</p>
            <p>title</p>
            <p>words</p>
            <p>link</p>
          </div>
        </div>

        <div className="w-2/4	 bg-white" data-scroll>
          <div
            className="h-screen bg-rose-500 m-0 p-0"
            data-scroll
            data-scroll-id="rose-500"
          >
            <p>1</p>
          </div>
          <div
            className="h-screen  bg-yellow-400"
            data-scroll
            data-scroll-id="yellow-400"
          >
            <p>2</p>
          </div>
          <div
            className="h-screen  bg-green-700"
            data-scroll
            data-scroll-id="green-700"
          >
            <p>3</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCase;
