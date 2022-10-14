import { React, useState, useEffect } from "react";

const Footer = () => {
  const first_text = "Say hello!";
  const second_text = "test2";
  const third_text = "test3";

  const [text, setText] = useState("");

  const textState = ["istyping", "isdeleting"];
  const [typing, setTyping] = useState(textState[0]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === "istyping" && text !== first_text) {
        setText(first_text.slice(0, text.length + 1));
      } else if (text === first_text && typing === "istyping") {
        sleep(2000).then(() => {
          setTyping(textState[1]);
        });
      } else if (
        (text === first_text && typing === "isdeleting") ||
        typing === "isdeleting"
      ) {
        setText(first_text.slice(0, text.length - 1));
        if (text.length <= 2) {
          setTyping(textState[0]);
        }
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [text, typing]);

  return (
    <>
      <footer
        data-scroll-section
        className="w-screen h-full bg-stone-100 font-medium border-t-4 border-stone-50"
      >
        <div className="flex flex-col justify-between sm:flex-row">
          <div className="h-full flex flex-col gap-5 px-5 pt-10 text-boyblue z-10 sm:gap-4 sm:px-10">
            <h4 id="blinking-cursor">{text}</h4>
            <h4 className="underline font-bold break-all sm:text-5xl">
              hello@jsph.online
            </h4>
          </div>

          <h1 className="text-white z-0 absolute sm:-mt-20 sm:pt-2 sm:right-1/3 right-10 -mt-10 font-black">
            ☺
          </h1>

          <div className=" flex flex-row m-auto gap-10 pt-10 ml-5 z-10 sm:mr-10 sm:text-right">
            <div className="flex flex-col gap-3 text-boyblue">
              <h6 className="underline">Stay Social</h6>
              <h5 className="leading-none font-bold">Linkedin ↗</h5>
              <h5 className="leading-none font-bold">Github ↗</h5>
            </div>

            <div className="flex flex-col gap-3 text-boyblue sm:text-right">
              <h6 className="underline">Find me at</h6>
              <h5 className="leading-none">53.4875°N.</h5>
              <h5 className="leading-none">02.2901°W</h5>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between w-screen px-5 py-5 text-boyblue opacity-20 sm:px-10 sm:py-5 h-full">
          <u>©2022</u>
          <u>JSPH.ONLINE</u>
        </div>
      </footer>
    </>
  );
};

export default Footer;
