import Hero from "../../components/hero";
import WordsSection from "../../components/words-section";
import ShowCase from "../../components/showcase";
import Footer from "../../components/footer";
import NcNewsShowcase from "../../components/ncnews.showcase";
import TempHandSVG from "../../components/svg/temp-hand.svg";

export default function Home() {
  return (
    <>
      <Hero />
      <WordsSection
        section1="Creative, curious, and always learning."
        section2="In the new year of 2022 I offically began my coding journey, and I havent stopped writting code since."
        section3="I like wokring with colour and meaning, problems to solve, imporvments to make."
        section4="— To simplify and amplify to define and design with clarity, charisma and craft."
        sectionclass="bg-neutral-50 w-screen h-max flex flex-row justify-between py-16 px-20 pb-10"
      />
      <ShowCase
        items={[
          {
            tags: [
              "web-app",
              "full-stack",
              "react.js",
              "node.js",
              "axios",
              "unit-testing",
            ],
            title: "ncnews",
            description: "full stack, web development.",
            link: "www.jjcrl-nc-news.netlify.app",
            image: <NcNewsShowcase />,
            id: "showcase-item-0",
            wordsclass: "w-2/4 h-screen bg-blurple",
            imageclass: "w-2/4 bg-blurple",
          },
          {
            tags: ["data-visual", "victory-charts", "html", "api"],
            title: "forecastface",
            description: "Data visualisation",
            link: "www.google.com",
            image: <TempHandSVG />,
            id: "showcase-item-1",
            backdrop: "dayglow",
            wordsclass: "w-2/4 h-screen bg-road",
            imageclass: "w-2/4 bg-road",
          },
        ]}
      />
      <WordsSection
        section1="Like what you see? Want to know more?"
        section3="Have a look around to find out more, or contact me today emails always open."
        section4="— Find out more"
        sectionclass="bg-neutral-50 w-screen h-max flex flex-row justify-between py-20 px-20 pb-28"
      />
      <Footer />
    </>
  );
}
