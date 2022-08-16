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
      <header className="main-nav" data-scroll-section>
        <Link href="/" passHref>
          <HomeButton />
        </Link>
        <nav className="nav-main">
          <button
            onClick={() => {
              toggleNav();
            }}
          >
            burger
          </button>
        </nav>
      </header>

      <div className="nav-options">
        <div className="options-container">
          <p>Work,</p>
          <p>About,</p>
          <p>Contact,</p>
          <p>Posts</p>
        </div>
      </div>

      <style jsx>{`
        .nav-main a {
          margin: 0 0.5em;
          font-size: 1.5em;
          font-family: GT Maru Trial;
        }
        a {
          color: black;
          text-decoration: none;
          mix-blend-mode: difference;
        }
        .main-nav {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100vw;
          position: fixed;
          justify-content: space-between;
          padding-right: 2em;
          z-index: 100;
        }

        .nav-options {
          background-color: blue;
          min-height: 100vh;
          min-width: 100vw;
          padding: 0;
          margin: 0;
          position: fixed;
          z-index: 99;
          display: flex;
          flex-direction: column;
          display: ${toggle === false ? `none` : null};
        }

        .options-container {
          margin: auto;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 70%;
        }

        p {
          font-size: 9em;
          padding-right: 0.3em;
          font-weight: 600;
          margin: auto;
        }

        p:hover {
          text-decoration: underline solid 0.11em;
        }

        .options-container p:last-child:hover {
          text-decoration: none;
        }
      `}</style>
    </>
  );
};
