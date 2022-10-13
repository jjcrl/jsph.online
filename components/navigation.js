import Link from "next/link";
import { HomeButton } from "./home-button";
import { useState } from "react";

export const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const [burger, setBurger] = useState(false);

  function toggleNav() {
    setToggle(!toggle);
    burger === "open" ? setBurger("") : setBurger("open");
  }

  return (
    <>
      <header
        className="flex flex-row w-screen fixed justify-between px-5 py-5 z-40 pr-16 bg-transparent"
        data-scroll-section
      >
        <Link href="/" passHref>
          <HomeButton />
        </Link>
        <nav className="m-0 self-center bg-transparent">
          <button
            id="nav-icon4"
            onClick={() => {
              toggleNav();
            }}
            className={burger}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      <div
        className="bg-cod min-h-screen min-w-screen p-0 m-0  z-20 flex flex-col absolute inset-0"
        id="toggle"
        onClick={() => {
          toggleNav();
        }}
      >
        <div className="m-auto flex flex-row flex-wrap w-2/3 text-center text-9xl text-gray-50 font-semibold">
          <ul className="list-none p-0 m-0 flex flex-wrap text-center justify-center leading-tight">
            <li
              className="pr-5"
              onClick={() => {
                toggleNav();
              }}
            >
              <Link href={"/work"}>Work,</Link>
            </li>
            <li
              onClick={() => {
                toggleNav();
              }}
            >
              <Link href={"/about"}>About,</Link>
            </li>
            <li
              className="pr-5"
              onClick={() => {
                toggleNav();
              }}
            >
              <Link href={"/contact"}>Contact,</Link>
            </li>
            <li>
              <Link href={"/"}>Posts</Link>
            </li>
          </ul>
        </div>
        <div className="sticker">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.25 113.39">
            <path
              fill="#2d6bfb"
              d="M129.14 36.32l-4.76-2.52c-.57-.3-1.26-.25-1.78.13l-21.1 15.56c-7.02 5.17-16.91-.06-16.58-8.77l.99-26.2c.02-.64-.32-1.25-.89-1.55l-4.76-2.52-28.67 54.19 4.62 2.44c.67.35 1.08 1.06 1.05 1.82l-.98 25.98c-.33 8.71 9.56 13.94 16.58 8.77l20.92-15.43c.61-.45 1.42-.51 2.09-.16l4.62 2.44 28.65-54.18z"
            />
            <path d="M68.72 54.05c.87-1.65 2.59-1.96 3.9-1.26 1.14.6 1.52 1.61 1.54 2.2l-1.27.14c0-.35-.17-.96-.82-1.3-.82-.43-1.75-.18-2.27.81s-.23 1.89.6 2.33c.66.35 1.28.1 1.53-.1l.71 1.07c-.48.37-1.64.67-2.78.06-1.36-.72-1.99-2.36-1.14-3.95zM74.03 56.87c.8-1.51 2.49-2.02 3.99-1.22s2.03 2.48 1.23 3.99c-.8 1.51-2.49 2.02-3.99 1.22s-2.03-2.49-1.23-3.99zm4.12 2.18c.48-.91.21-1.9-.68-2.37-.9-.48-1.87-.14-2.35.77s-.21 1.9.69 2.38c.89.47 1.86.13 2.34-.78zM81.74 57.71l1.35.71-.56 4.73 3.59-3.12 1.34.71-2.68 5.06-1.06-.56 1.73-3.27-2.92 2.62-1.19-.63.52-3.89-1.73 3.27-1.06-.56 2.67-5.07zM88.9 61.49l1.06.56-2.68 5.06-1.06-.56 2.68-5.06zM91.4 62.82l.92.48.56 4.4 1.7-3.21 1.06.56-2.68 5.06-.94-.5-.58-4.3-1.65 3.12-1.06-.56 2.67-5.05zM95.44 68.22c.86-1.61 2.57-2 3.98-1.25 1.12.59 1.54 1.6 1.53 2.2l-1.22.12c0-.34-.2-.94-.86-1.29-.75-.4-1.75-.3-2.33.81-.54 1.03-.19 2.02.6 2.44.71.37 1.47.24 1.9-.34l.02-.03-.99-.52.43-.81 2.09 1.1-1.45 2.74-.96-.51.43-.8c-.43.35-1.2.49-2.05.04-1.31-.69-1.96-2.31-1.12-3.9zM68.74 66.46l1.2.24c-.08.4-.05.87.48 1.15.39.2.8.22 1.02-.19.24-.45-.15-.89-.61-1.39-.54-.58-1.11-1.29-.64-2.18.5-.94 1.46-1.09 2.57-.5 1 .53 1.26 1.38 1.16 1.94l-1.2-.08c.07-.31-.01-.77-.44-1-.45-.24-.78-.16-.95.16-.19.36.12.71.49 1.12.58.62 1.3 1.41.73 2.5-.48.92-1.56 1.1-2.62.54-1.1-.59-1.35-1.61-1.19-2.31zM73.94 67.55c.8-1.51 2.49-2.02 3.99-1.22 1.51.8 2.04 2.48 1.24 3.99-.8 1.5-2.49 2.02-3.99 1.22-1.51-.8-2.04-2.49-1.24-3.99zm4.12 2.18c.48-.91.21-1.9-.68-2.37-.9-.48-1.87-.14-2.35.77s-.21 1.9.69 2.38c.89.46 1.86.13 2.34-.78zM80.02 70.77c.8-1.51 2.49-2.02 4-1.22 1.5.8 2.03 2.48 1.23 3.99-.8 1.5-2.49 2.02-3.99 1.22-1.51-.8-2.03-2.49-1.24-3.99zm4.13 2.18c.48-.91.21-1.9-.68-2.37-.9-.48-1.87-.14-2.35.77s-.21 1.9.69 2.38c.89.46 1.86.13 2.34-.78zM87.74 71.61l.92.49.56 4.4 1.7-3.21 1.06.56-2.68 5.07-.94-.5-.58-4.3-1.65 3.12-1.06-.56 2.67-5.07z" />
            <path
              fill="#1a1b1c"
              d="M63.22 89.74l.13 10.76c-.02.57.62.92 1.09.58l9.14-5.86c.34-.25.31-.77-.07-.96l-9.46-5c-.37-.2-.82.06-.83.48z"
            />
          </svg>
        </div>
        <div className="sticker2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.25 113.39">
            <path
              fill="#e95b37"
              d="M175.09 56.76v-.04h-.01c-.19-2.87-.69-5.85-1.53-8.94-2.08-7.73-7.02-13.18-13.21-17.74-5.41-3.98-10.32-8.13-9.63-15.87.26-2.86-1.96-2.85-4.08-2.87l-22.08-.02-64.79-.05-22.08-.02c-2.12.02-4.34.01-4.09 2.87.68 7.73-4.24 11.88-9.65 15.85-6.2 4.55-11.14 9.99-13.23 17.72-.84 3.08-1.35 6.06-1.54 8.94h-.01v.08h.01c.19 2.87.69 5.85 1.53 8.94 2.08 7.73 7.02 13.18 13.21 17.74 5.41 3.98 10.32 8.13 9.63 15.87-.26 2.86 1.96 2.85 4.08 2.87l22.08.02 64.79.05 22.08.02c2.12-.02 4.34-.01 4.09-2.87-.68-7.73 4.24-11.88 9.65-15.85 6.2-4.55 11.14-9.99 13.23-17.72.84-3.08 1.35-6.06 1.54-8.94h.01v-.04z"
            />
          </svg>
          <text id="sticker-text">MADE WITH LOVE ❤</text>
        </div>
      </div>

      <style jsx>{`
        #toggle {
          display: ${toggle === false ? `none` : "show"};
        }

        li:hover {
          text-decoration: underline solid 0.11em;
        }

        li:last-child:hover {
          text-decoration: none;
        }

        .sticker {
          width: 20%;
          margin: 0;
          position: absolute;
          left: 60vw;
          top: 50vh;
        }

        .sticker2 {
          width: 15%;
          margin: 0;
          position: absolute;
          left: 18vw;
          top: 25vh;
          transform: rotate(-10deg);
        }

        #sticker-text {
          position: absolute;
          top: 45px;
          left: 40px;
          transform: rotate(0deg);
          width: 140px;
          line-height: 25px;
          text-align: center;
          font-size: 1.25rem;
          font-weight: 600;
        }

        #nav-icon4 span {
          display: block;
          position: absolute;
          height: 7px;
          width: 100%;
          background: ${burger === "open" ? "whitesmoke" : "black"};
          border-radius: 9px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: 0.25s ease-in-out;
        }

        #nav-icon4 {
          width: 45px;
          height: 45px;
          position: relative;
          transform: rotate(0deg);
          transition: 0.5s ease-in-out;
          margin-top: 20px;
          margin-right: -20px;
          background-color: transparent;
          opacity: 90%;
        }

        #nav-icon4 span:nth-child(1) {
          top: 0px;
          transform-origin: left center;
        }

        #nav-icon4 span:nth-child(2) {
          top: 14px;
          transform-origin: left center;
        }

        #nav-icon4 span:nth-child(3) {
          top: 30px;
          transform-origin: left center;
        }

        #nav-icon4.open span:nth-child(1) {
          transform: rotate(45deg);
          top: 6.5px;
          left: 8px;
          width: 100%;
        }

        #nav-icon4.open span:nth-child(2) {
          width: 0%;
          opacity: 0;
        }

        #nav-icon4.open span:nth-child(3) {
          transform: rotate(-45deg);
          top: 39px;
          left: 8px;
          width: 101%;
        }
      `}</style>
    </>
  );
};
