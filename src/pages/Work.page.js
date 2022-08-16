import Footer from "../../components/footer";
import WordsSection from "../../components/words-section";
import Link from "next/link";
export default function Work() {
  return (
    <>
      <section data-scroll-section>
        <Link href={"/work/work1"}>
          <div className="work-container" id="works-1">
            <div className="show">
              <p>title</p>
              <p>line</p>
            </div>
          </div>
        </Link>{" "}
        <Link href={"/work/work2"}>
          <div className="work-container" id="works-2">
            <div className="show">
              <p>title</p>
              <p>line</p>
            </div>
          </div>
        </Link>{" "}
        <Link href={"/work/work3"}>
          <div className="work-container" id="works-3">
            <div className="show">
              <p>title</p>
              <p>line</p>
            </div>
          </div>
        </Link>
      </section>
      <WordsSection />
      <Footer />

      <style jsx>
        {`
          section {
            disaply: flex;
            flex-direction: column;
          }

          .show {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            width: 100%;
            padding: 8em;
            background-color: white;
          }

          div:hover .show {
            background-color: rgba(0, 0, 0, 0.5);
          }

          div:hover p {
            opacity: 1;
          }

          .work-container {
            width: 100vw;
            height: 100vh;
          }

          .work-container p {
            font-size: 2.5em;
            opacity: 0;
            color: white;
          }
        `}
      </style>
    </>
  );
}
