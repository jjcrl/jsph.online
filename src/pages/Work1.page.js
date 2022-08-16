import Footer from "../../components/footer";
import ShowCase from "../../components/showcase";
import Topper from "../../components/topper";
import WordsSection from "../../components/words-section";
import Gallery from "../../components/gallery";

export default function Work1() {
  return (
    <>
      <Topper />
      <WordsSection />
      <ShowCase />
      <Gallery
        direction="col"
        bg="black"
        height="96"
        items={[{ x: 1 }, { x: 2 }, { x: 3 }]}
      />
      <WordsSection />
      <Footer />
    </>
  );
}
