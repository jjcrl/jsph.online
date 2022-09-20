import WordsSection from "../../components/words-section";
import Footer from "../../components/footer";

export default function About() {
  return (
    <>
      <section data-scroll-section>
        <div
          className="flex flex-col w-screen
        bg-boyblue py-20"
        >
          <p className="py-20">about</p>
        </div>
      </section>

      <WordsSection
        bg={"gray-50"}
        section1={"section1"}
        section2={"section2"}
        section3={"section3"}
        section4={"secrtion4"}
      />

      <Footer />
    </>
  );
}
