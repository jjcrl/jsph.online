import Hero from "../../components/hero";
import WordsSection from "../../components/words-section";
import ShowCase from "../../components/showcase";
import Footer from "../../components/footer";
import Marquee from "../../components/marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <WordsSection
        section1="Creative, curious, and always learning."
        section2="In the new year of 2022 I offically began my coding journey, and I havent stopped writting code since."
        section3="I like wokring with colour and meaning, problems to solve, imporvments to make."
        section4="— To simplify and amplify to define and design with clarity, charisma and craft."
        background={"gray-50"}
        font1="ink"
        font2="ink"
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
            image: "blurple",
            theme: "blurple",
            id: "showcase-item-0",
          },
          {
            tags: ["data-visual", "victory-charts", "html", "api"],
            title: "forecastface",
            description: "Data visualisation",
            link: "www.google.com",
            image: "road",
            theme: "road",
            id: "showcase-item-1",
          },
        ]}
      />
      <WordsSection
        section1="Like what you see? Want to know more?"
        section2="hello there ☺️"
        section3="Have a look around to find out more, or contact me today emails always open."
        section4="Find out more →"
        background={"gray-50"}
        font1={"ink"}
        font2={"blurple"}
      />
      <Marquee
        bg="cod"
        text="blurple"
        items={[
          "☺️ Currently open to new opertunities ☺️",
          "~ Let's get creative ~",
        ]}
      />
      <Footer />
    </>
  );
}
