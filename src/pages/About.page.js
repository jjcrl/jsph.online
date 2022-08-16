import WordsSection from "../../components/words-section";
import Footer from "../../components/footer";
import Topper from "../../components/topper";

export default function About() {
  // const { scroll } = useContext(SmoothScrollContext);

  // const goToSecondPart = (event) => {
  //   event.preventDefault();
  //   scroll && scroll.scrollTo("#second-part");
  // };

  // const goToTop = (event) => {
  //   event.preventDefault();
  //   scroll && scroll.scrollTo(0);
  // };

  return (
    <>
      <section data-scroll-section>
        <Topper />
        <WordsSection />
        <Footer />
      </section>
    </>
  );
}
