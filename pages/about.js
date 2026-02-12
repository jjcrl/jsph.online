import { SmoothScrollProvider } from "../src/contexts/SmoothScroll.context";
import WordsSection from "../components/words-section";
import Footer from "../components/footer";

export default function AboutPage() {
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
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
        section4={"section4"}
      />

      <Footer />
    </SmoothScrollProvider>
  );
}
