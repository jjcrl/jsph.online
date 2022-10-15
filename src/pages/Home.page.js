import Hero from "../../components/hero";
import WordsSection from "../../components/words-section";
import ShowCase from "../../components/showcase";
import Footer from "../../components/footer";
import NcNewsShowcase from "../../components/ncnews.showcase";
import TempHandSVG from "../../components/svg/temp-hand.svg";
import TaskitFront from "../../components/TaskItFront";
import NcNewsMini from "../../public/images/ncnews-mini.png";
import ForecastFaceMini from "../../public/images/forecastface-mini.png";
import TaskItMini from "../../public/images/taskit-mini.png";

export default function Home() {
  return (
    <>
      <Hero />
      <WordsSection
        type={1}
        section1="Creative, curious, and always learning."
        section2="In the new year of 2022 I offically began my coding journey, and I havent stopped writting code since."
        section3="I like wokring with colour and meaning, problems to solve, imporvments to make."
        section4="— To simplify and amplify to define and design with clarity, charisma and craft."
      />
      <ShowCase
        items={[
          {
            tags: ["web-app", "full-stack", "react.js", "node.js", "express"],
            title: "Northcoders News",
            description: "Full Stack web development.",
            link: "www.jjcrl-nc-news.netlify.app",
            image: <NcNewsShowcase />,
            mini_image: "/../public/images/ncnews-mini.png",
            id: "showcase-item-0",
            wordsclass: "w-1/2 h-screen bg-blurple",
            image_class:
              "h-fit w-full p-5 bg-blurple -mt-5 z-10 text-white gap-1",
          },
          {
            tags: ["web-app", "react.js", "data-visualisation", "api"],
            title: "Forecast Face",
            description: "Weather data visualisation",
            link: "www.forecast-face.netlify.app",
            image: <TempHandSVG />,
            mini_image: "/../public/images/forecastface-mini.png",
            id: "showcase-item-1",
            wordsclass: "w-1/2 h-screen bg-road",
            image_class: "h-fit w-full p-5 bg-road -mt-5 z-10 text-white gap-1",
          },
          {
            tags: ["web-app", "react.js", "tailwindcss"],
            title: "Task It",
            description: "Task managment web app.",
            link: "www.jjcrl-task-managment.netlify.app",
            image: <TaskitFront />,
            mini_image: "/../public/images/taskit-mini.png",
            id: "showcase-item-2",
            wordsclass: "w-1/2 h-screen bg-lime-500",
            image_class:
              "h-fit w-full p-5 bg-lime-500 -mt-5 z-10 text-white gap-1",
          },
        ]}
      />

      <WordsSection
        type={2}
        section1="Want to know more?"
        section2="This is some text to fill out the first section, it will be around this long."
        section3="This will be around this long"
        section4="And this will be the link"
      />

      <Footer />
    </>
  );
}
