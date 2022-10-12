import { React, useState, useEffect } from "react";
import Clock from "./clock";

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
      <footer data-scroll-section className="w-screen h-min">
        <div className="flex flex-row w-full justify-between">
          <div className="h-full flex flex-col gap-3 px-10 pt-10 text-boyblue">
            <h4 id="blinking-cursor">{text}</h4>
            <h4 className="underline">hello@jsph.online</h4>
          </div>
          <div className="w-fit px-10 pt-10">
            <Clock />
          </div>
        </div>

        <div className="flex flex-row justify-between w-screen px-10 text-neutral-500 ">
          <u>©2022</u>
          <u>jsph.online</u>
          <u>Joseph Carroll</u>
        </div>
      </footer>
    </>
  );
};

export default Footer;
