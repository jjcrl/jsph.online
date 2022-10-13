import { useContext, useEffect, useState } from "react";
import { SmoothScrollContext } from "../src/contexts/SmoothScroll.context";

const ShowCase = ({ items }) => {
  const { scroll } = useContext(SmoothScrollContext);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", (obj) => {
        const elements = obj.currentElements;
        if (elements) {
          if (elements["showcase-item-0"]) {
            setIndex(0);
          }
          if (
            elements["showcase-item-1"] &&
            elements["showcase-item-1"].progress > 0.2
          ) {
            setIndex(1);
          }
          if (
            elements["showcase-item-2"] &&
            elements["showcase-item-2"].progress > 0.2
          ) {
            setIndex(2);
          }
          if (
            elements["showcase-item-3"] &&
            elements["showcase-item-3"].progress > 0.2
          ) {
            setIndex(3);
          }
        }
      });
    }
  }, [scroll]);

  return (
    <>
      <section
        className="w-screen flex flex-row relative justify-items-end bg-stone-100"
        data-scroll-section
        id="target"
        data-scroll-id="target"
      >
        <div
          className={items[index].wordsclass}
          data-scroll
          data-scroll-sticky
          data-scroll-target="#target"
        >
          <div className="flex flex-col h-screen p-20 pb-10 justify-end w-full h-full">
            <h6 className="text-white mix-blend-difference pb-2">
              {items[index].title}
            </h6>
            <h5 className="text-white mix-blend-difference">
              {items[index].description}
            </h5>
            <ul className="flex flex-row text-pale mix-blend-difference text-xs gap-3 italic py-2 opacity-70 pl-1">
              {items[index].tags
                ? items[index].tags.map((tag, index) => (
                    <li key={`tag-${index}`} className="text-sm">
                      {tag}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>

        <div className={items[index].imageclass} data-scroll>
          {items.map((item) => (
            <div
              data-scroll
              data-scroll-id={item.id}
              className={`h-screen flex flex-col bg-transparent`}
            >
              {item.image}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ShowCase;
