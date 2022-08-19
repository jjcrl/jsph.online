import { useContext, useEffect, useState } from "react";
import { SmoothScrollContext } from "../src/contexts/SmoothScroll.context";
import NcNewsFront from "./ncnews-front";

const ShowCase = ({ items }) => {
  const { scroll } = useContext(SmoothScrollContext);
  const [currColor, setCurrColor] = useState([items].theme);
  const [index, setIndex] = useState(0);

  const ncnews = <NcNewsFront />;

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", (obj) => {
        const elements = obj.currentElements;
        console.log(elements);
        if (elements) {
          if (elements["showcase-item-0"]) {
            setCurrColor("whitesmoke");
            setIndex(0);
          }
          if (
            elements["showcase-item-1"] &&
            elements["showcase-item-1"].progress > 0.2
          ) {
            setCurrColor("peachpuff");
            setIndex(1);
          }
          if (
            elements["showcase-item-2"] &&
            elements["showcase-item-2"].progress > 0.2
          ) {
            setCurrColor("road");
            setIndex(2);
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
          className={`w-2/4	 h-screen bg-${items[index].theme}`}
          data-scroll
          data-scroll-sticky
          data-scroll-target="#target"
        >
          <div className="flex flex-col h-screen p-20 justify-end">
            <h6 className="text-white mix-blend-difference">
              {items[index].title}
            </h6>
            <h5 className="text-pale mix-blend-difference">
              {items[index].description}
            </h5>
            <br />{" "}
            <ul className="flex flex-row text-pale mix-blend-difference text-xs gap-3 italic m-0">
              {items[index].tags
                ? items[index].tags.map((tag) => <li>{tag}</li>)
                : null}
            </ul>
            <h7 className="text-pale mix-blend-difference">
              {items[index].link}
            </h7>
          </div>
        </div>

        <div className={`w-2/4	 bg-ink`} data-scroll>
          {items.map((item) => (
            <div
              data-scroll
              data-scroll-id={item.id}
              className={`h-screen flex flex-col mt-3`}
              id={item.theme}
            >
              {/* <NcNewsFront /> */}
              {/* {item.image === "ncnews" ? ncnews : null} */}
              {item.image}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ShowCase;
5;
