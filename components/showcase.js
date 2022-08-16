import { useContext, useEffect, useState } from "react";
import { SmoothScrollContext } from "../src/contexts/SmoothScroll.context";

const ShowCase = ({ works }) => {
  const { scroll } = useContext(SmoothScrollContext);
  const [currColor, setCurrColor] = useState("pink");

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", (obj) => {
        const elements = obj.currentElements;
        if (elements) {
          if (elements.red) {
            setCurrColor("red");
          }
          if (elements.gold && elements.gold.progress > 0.2) {
            setCurrColor("gold");
          }
          if (elements.green && elements.green.progress > 0.2) {
            setCurrColor("green");
          }
        }
      });
    }
  }, [scroll]);

  return (
    <>
      <section data-scroll-section id="target" data-scroll-id="target">
        <div
          className="words"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#target"
        >
          <div className="words-container">
            <p>tags</p>
            <p>title</p>
            <p>words</p>
            <p>link</p>
          </div>
        </div>

        <div className="images" data-scroll>
          <div className="image-container" data-scroll data-scroll-id="red">
            <p>1</p>
          </div>
          <div className="image-container" data-scroll data-scroll-id="gold">
            <p>2</p>
          </div>
          <div className="image-container" data-scroll data-scroll-id="green">
            <p>3</p>
          </div>
        </div>
      </section>

      <style jsx>
        {`
          section {
            display: flex;
            postion: relative;
            justify-items: flex-end;
          }

          .words {
            background-color: ${currColor};
            flex: 1;
            height: 100vh;
          }

          .words-container {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            padding: 5em;
          }

          .images {
            flex: 1;
            background-color: white;
          }

          .images div:first-child {
            background-color: red;
          }

          .images div:nth-child(2) {
            background-color: gold;
          }

          .images div:nth-child(3) {
            background-color: green;
          }

          .image-container {
            height: 100vh;
            width: 50vw;
          }

          .images p {
            height: 100%;
            width: 100%;
            object-fit: contain;
            padding-bottom: 125%;
          }
        `}
      </style>
    </>
  );
};

export default ShowCase;
