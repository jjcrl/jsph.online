import Footer from "../../components/footer";
import Topper from "../../components/topper";
import WordsSection from "../../components/words-section";
import forecastface from "../../public/images/forecastface.png";
import Image from "next/image";

import Link from "next/link";
import Gallery from "../../components/gallery";
export default function Work() {
  return (
    <>
      <WordsSection
        section2="Section Two, for more things that is spereate from 3 and 4."
        section3="Section Three, this is togther with section 4."
        section4="Section Four, this is the final section."
        background={"ink"}
        font2={"pinkflame"}
      />
      <section data-scroll-section className="flex flex-col">
        <div data-scroll>
          <Link href={"/work/work1"}>
            <div className="h-screen w-screen bg-white" id="works">
              <div className="show">
                <div className="absolute inset-0 w-screen h-screen z-0">
                  <Image src={forecastface} />
                </div>
                <h3>Title</h3>
                <h4 className="italic">line</h4>
              </div>
            </div>
          </Link>{" "}
          {/* <Link href={"/work/work2"}>
            <div className="h-screen w-screen bg-white" id="works">
              <div className="show">
                <h3>Title</h3>
                <h4 className="italic">line</h4>
              </div>
            </div>
          </Link>{" "}
          <Link href={"/work/work3"}>
            <div className="h-screen w-screen bg-white" id="works">
              <div className="show">
                <h3>Title</h3>
                <h4 className="italic">line</h4>
              </div>
            </div>
          </Link> */}
        </div>
      </section>
      <WordsSection
        section1="Section 1, main section."
        section2="Section 2, for more things that is spereate from 3 and 4."
        section3="Section 3, this is togther with section 4."
        section4="Section 4, this is the final section."
        background={"pale"}
      />
      <Gallery
        items={["one,", "two", "three", "four", "five"]}
        background="pale"
      />
      <WordsSection
        section1="☺"
        section2="Section Two, for more things that is spereate from 3 and 4."
        section3="Section Three, this is togther with section 4."
        section4="Section Four, this is the final section."
        background={"ink"}
        font1={"pinkflame"}
        font2={"road"}
      />
      <Footer />

      <style jsx>
        {`
          .show {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-wrap: nowrap;
            height: 100%;
            width: 100%;
            // padding: 9em 0 1em 5em;
            color: white;
            align-items: start;
            backgrounf-color: transparent;
          }

          #works:hover .show {
            background-color: rgba(0, 0, 0, 0.1);
            color: white;
          }
        `}
      </style>
    </>
  );
}
