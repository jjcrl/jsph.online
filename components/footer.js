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
      <footer data-scroll-section className="w-screen h-min bg-stone-100">
        <div className="flex flex-row w-full justify-between">
          <div className="h-full flex flex-col gap-3 px-10 pt-10 text-boyblue">
            <h4 id="blinking-cursor">{text}</h4>
            <h4 className="underline">hello@jsph.online</h4>
          </div>

          <h1 className="relative top-20 left-36 text-stone-200">☺</h1>

          <div className=" flex flex-row m-auto gap-16 pt-12 mr-10">
            <div className="flex flex-col gap-3 font-bold text-boyblue">
              <h6 className="underline">Stay Social</h6>
              <h5>Linkedin ↗</h5>
              <h5>Github ↗</h5>
            </div>

            <div className="flex flex-col gap-3 font-bold text-boyblue">
              <h6 className="underline">Find me at</h6>
              <h5>53.4875°N.</h5>
              <h5>02.2901°W</h5>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between w-screen px-10 text-stone-200 pt-5">
          <u>©2022</u>
          <u>JSPH.ONLINE</u>
        </div>
      </footer>
    </>
  );
};

export default Footer;
