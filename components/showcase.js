import Image from "next/image";
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
        className="hidden sm:flex w-screen flex flex-row relative justify-items-end bg-stone-100 w-full h-full"
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
          <div className="flex flex-col h-screen p-20 pb-12 justify-end w-full h-full">
            <h6 className="text-white mix-blend-difference pb-2 font-medium">
              {items[index].title}
            </h6>
            <h5 className="text-white mix-blend-difference font-bold">
              {items[index].description}
            </h5>
            <ul className="flex flex-row text-pale mix-blend-difference text-xs gap-3 opacity-50 w-fit h-min font-medium">
              {items[index].tags
                ? items[index].tags.map((tag, index) => (
                    <li key={`tag-${index}`} className="leading-none py-2">
                      {tag}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>

        <div className="w-1/2 bg-black" data-scroll>
          {items.map((item) => (
            <div
              data-scroll
              data-scroll-id={item.id}
              className="h-screen flex flex-col w-full bg-transparent"
            >
              {item.image}
            </div>
          ))}
        </div>
      </section>

      <section
        data-scroll-section
        className="flex flex-col w-screen h-full sm:hidden"
      >
        {items.map((item, index) => (
          <div className="w-screen h-full flex flex-col">
            <div className="h-fit w-fit">
              <Image
                src={item.mini_image[`image${index + 1}`]}
                height={555}
                width={500}
                loading="lazy"
                priority={true}
              />
            </div>
            <div className={item.image_class}>
              <h6 className="mix-blend-difference font-medium text-2xl">
                {item.title}
              </h6>
              <div>
                <ul className="flex text-xs w-full justify-start py-1 mix-blend-difference gap-2 font-regular">
                  {item.tags.map((item_tag, index) => (
                    <li key={`mini-tag-${index}`}>{item_tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ShowCase;
