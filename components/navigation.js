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
        className="bg-ink min-h-screen min-w-screen p-0 m-0 fixed z-40 flex flex-col text-boyblue"
        id="toggle"
        onClick={() => {
          toggleNav();
        }}
      >
        <div className="m-auto flex flex-row flex-wrap w-3/4">
          <Link href={"/work"}>
            <p
              onClick={() => {
                toggleNav();
              }}
            >
              Work,
            </p>
          </Link>
          <Link href={"/about"}>
            <p
              onClick={() => {
                toggleNav();
              }}
            >
              About,
            </p>
          </Link>
          <Link href={"/contact"}>
            <p
              onClick={() => {
                toggleNav();
              }}
            >
              Contact,
            </p>
          </Link>
          <p>Posts</p>
        </div>
      </div>

      <style jsx>{`
        #toggle {
          display: ${toggle === false ? `none` : null};
        }

        p {
          font-size: 9em;
          padding-right: 0.3em;
          font-weight: 600;
          margin: auto;
          line-height: 1.15em;
        }

        p:hover {
          text-decoration: underline solid 0.11em;
        }

        p:last-child:hover {
          text-decoration: none;
        }
      `}</style>
    </>
  );
};
