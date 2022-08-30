import Link from "next/link";
import { HomeButton } from "./home-button";
import { useState } from "react";

export const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  function toggleNav() {
    setToggle(!toggle);
  }

  return (
    <>
      <header
        className="flex flex-row w-screen fixed justify-between pr-5 z-50"
        data-scroll-section
      >
        <Link href="/" passHref>
          <HomeButton />
        </Link>
        <nav className={`m-0 self-center ${toggle ? "text-pale" : "text-ink"}`}>
          <button
            onClick={() => {
              toggleNav();
            }}
          >
            options
          </button>
        </nav>
      </header>

      <div
        className="bg-ink min-h-screen min-w-screen p-0 m-0  z-40 flex flex-col text-pale"
        id="toggle"
        onClick={() => {
          toggleNav();
        }}
      >
        <div className="m-auto flex flex-row flex-wrap w-2/3 text-center text-9xl ">
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
      </div>

      <style jsx>{`
        #toggle {
          display: ${toggle === false ? `none` : null};
        }

        li:hover {
          text-decoration: underline solid 0.11em;
        }

        li:last-child:hover {
          text-decoration: none;
        }
      `}</style>
    </>
  );
};
