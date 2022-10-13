import Hero from "../../components/hero";
import WordsSection from "../../components/words-section";
import ShowCase from "../../components/showcase";
import Footer from "../../components/footer";
import NcNewsShowcase from "../../components/ncnews.showcase";
import TempHandSVG from "../../components/svg/temp-hand.svg";
import TaskitFront from "../../components/TaskItFront";

export default function Home() {
  return (
    <>
      <Hero />
      <WordsSection
        section1="Creative, curious, and always learning."
        section2="In the new year of 2022 I offically began my coding journey, and I havent stopped writting code since."
        section3="I like wokring with colour and meaning, problems to solve, imporvments to make."
        section4="— To simplify and amplify to define and design with clarity, charisma and craft."
        sectionclass="bg-stone-100 w-screen h-max flex flex-row justify-between py-16 px-20 pb-20"
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
            title: "Northcoders News",
            description: "Full Stack web development.",
            link: "www.jjcrl-nc-news.netlify.app",
            image: <NcNewsShowcase />,
            id: "showcase-item-0",
            wordsclass: "w-1/2 h-screen bg-blurple",
            imageclass: "w-1/2 bg-ink",
          },
          {
            tags: ["web-app", "react.js", "data-visualisation", "api"],
            title: "Forecast Face",
            description: "Weather data visualisation",
            link: "www.forecast-face.netlify.app",
            image: <TempHandSVG />,
            id: "showcase-item-1",
            wordsclass: "w-1/2 h-screen bg-road",
            imageclass: "w-1/2 h-full bg-ink",
          },
          {
            tags: ["web-app", "react.js", "tailwindcss"],
            title: "Task It",
            description: "Task managment web app.",
            link: "www.jjcrl-task-managment.netlify.app",
            image: <TaskitFront />,
            id: "showcase-item-2",
            wordsclass: "w-1/2 h-screen bg-indigo-100",
            imageclass: "w-1/2 h-full bg-black",
          },
        ]}
      />

      <WordsSection
        section1=""
        section2="section2"
        section3="section3"
        section4="section4"
        sectionclass="bg-stone-100 w-screen flex flex-row justify-between py-20 px-20"
      />

      <Footer />
    </>
  );
}
