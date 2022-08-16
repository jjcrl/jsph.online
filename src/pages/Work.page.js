import Footer from "../../components/footer";
import WordsSection from "../../components/words-section";
import Link from "next/link";
export default function Work() {
  return (
    <>
      <section data-scroll-section className="flex flex-col">
        <WordsSection />
        <Link href={"/work/work1"}>
          <div className="h-screen w-screen text-white" id="works-1">
            <div className="show">
              <h3>title</h3>
              <h4>line</h4>
            </div>
          </div>
        </Link>{" "}
        <Link href={"/work/work2"}>
          <div className="h-screen w-screen text-white opacity-0	" id="works-2">
            <div className="show">
              <h3>title</h3>
              <h4>line</h4>
            </div>
          </div>
        </Link>{" "}
        <Link href={"/work/work3"}>
          <div className="h-screen w-screen text-white opacity-0	" id="works-3">
            <div className="show">
              <h3>title</h3>
              <h4>line</h4>
            </div>
          </div>
        </Link>
      </section>
      <WordsSection />
      <Footer />

      <style jsx>
        {`
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
        `}
      </style>
    </>
  );
}
