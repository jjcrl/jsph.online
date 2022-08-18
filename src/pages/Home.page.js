import Hero from "../../components/hero";
import WordsSection from "../../components/words-section";
import ShowCase from "../../components/showcase";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WordsSection
        section1="Let's say hello to section one together."
        section2="Who could forget aout section 2? Not me thats for sure."
        section3="This is the small but impactful section 3, it is usually aliitle bit bigger than the next section."
        section4="And last but never least we have section 4, the smallest of all."
        background={"white"}
        font1="pinkflame"
        font2="ink"
      />
      <ShowCase
        items={[
          {
            tags: ["a", "b", "c"],
            title: "test1",
            description:
              "theese are some words aboutt the project, it has this that and is so good and and so amazing",
            link: "www.google.com",
            image: "pinkflame",
            theme: "pinkflame",
            id: "showcase-item-0",
          },
          {
            tags: ["a", "b", "c"],
            title: "test2",
            description:
              "theese are some words aboutt the project, it has this that and is so good and and so amazing",
            link: "www.google.com",
            image: "boyblue",
            theme: "boyblue",
            id: "showcase-item-1",
          },
        ]}
      />
      <WordsSection
        section2="This is the second section."
        section3="This is just a mini, a smaller section, but not the smallest one yet."
        section4="And this is the final section, the smallest of all."
        background={"ink"}
        font1={"road"}
        font2={"pinkflame"}
      />
      <Footer />
    </>
  );
}
