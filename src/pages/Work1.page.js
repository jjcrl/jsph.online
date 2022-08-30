import Footer from "../../components/footer";
import ShowCase from "../../components/showcase";
import Topper from "../../components/topper";
import WordsSection from "../../components/words-section";
import Gallery from "../../components/gallery";
import forecastface from "../../public/images/forecastface.png";
import SunRingSVG from "../../components/svg/sun-ring.svg";
import TempHandSVG from "../../components/svg/temp-hand.svg";
import DialFaceSVG from "../../components/svg/dial-face.svg";
import ForecastFaceFonts from "../../components/forecastface-fonts";
import ForecastFaceColours from "../../components/forecastface-colours";
import Marquee from "../../components/marquee";

export default function Work1() {
  return (
    <>
      <Topper bg={forecastface} />
      <WordsSection
        section1="Forecast Face"
        section2="24hr weather forecast at a glance."
        section3="A Stand alone webapp for daily weather data visulaisation."
        section4="and this could be for the guthub or link?"
        background="black"
        font1="pale"
        font2="whitesmoke"
      />
      <ShowCase
        items={[
          {
            image: <DialFaceSVG />,
            title: "Daily Dial Infomation",
            description:
              "Your day at a glace, display what your need to know for right now.",
            theme: "whitesmoke",
            id: "showcase-item-0",
            backdrop: "black",
          },
          {
            image: <SunRingSVG />,
            title: "sun position tracking",
            description:
              "Sun rise, the highest point of the sun , and sun set, disaplyed subtley, to keep track of where the sun is thoughout the day",
            theme: "peachpuff",
            id: "showcase-item-1",
            backdrop: "black",
          },
          {
            image: <TempHandSVG />,
            title: "Current temperature, on the hour, every hour.",
            description:
              "As the hand moves around the dial with the time, it tracks the current temperature and siaply its about the hand.",
            theme: "road",
            id: "showcase-item-2",
            backdrop: "black",
          },
        ]}
      />
      <Marquee
        bg="whitesmoke"
        text="cod"
        items={[
          "Marquee Item 1",
          "Marquee Item 2",
          "Marquee Item 3",
          "Marquee Item 4",
          "Marquee Item 5",
        ]}
      />{" "}
      <Gallery
        direction="col"
        bg="black"
        height="96"
        items={[<ForecastFaceFonts />, <ForecastFaceColours />]}
      />
      <WordsSection
        section1="This is  the last first section."
        section2="And this is still the second section that could be very long on its own."
        section3="and maybe just one section thats a mini ?"
        background={"cod"}
        font1={"pale"}
        font2={"pale"}
      />
      <Footer />
    </>
  );
}
