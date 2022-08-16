import Hero from "../../components/hero";
import WordsSection from "../../components/words-section";
import ShowCase from "../../components/showcase";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WordsSection />
      <ShowCase
        works={[
          {
            tags: [1, 2, 3],
            title: "test1",
            words:
              "theese are some words aboutt the project, it has this that and is so good and and so amazing",
            link: "www.google.com",
            image: "test",
          },
          {
            tags: [1, 2, 3],
            title: "test2",
            words:
              "theese are some words aboutt the project, it has this that and is so good and and so amazing",
            link: "www.google.com",
            image: "test",
          },
        ]}
      />
      <Footer />
    </>
  );
}
