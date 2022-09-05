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

export default function ForecastFace() {
  return (
    <>
      <Topper bg={forecastface} />
      <WordsSection
        section1="Forecast Face, Data Visualisation."
        section2="A Stand alone webapp for daily weather forecast, with temperature, sun and rain data."
        section3="www.github.com/jjcrl.forecastface"
        section4="www.forecastface.netlify.app"
        background="black"
        font1="whitesmoke"
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
            title: "Sun Position Tracking",
            description:
              "Sun rise, highest point and sun set displayed centraly to provide sun data, at a glance.",
            theme: "peachpuff",
            id: "showcase-item-1",
            backdrop: "black",
          },
          {
            image: <TempHandSVG />,
            title: "Current temperature On The Hour Every Hour.",
            description:
              "As the hand moves around the clock face, it updates to the current temperature.",
            theme: "road",
            id: "showcase-item-2",
            backdrop: "black",
          },
        ]}
      />
      <WordsSection
        section1="Keeping things simple."
        section2="I wanted this to be simple , visually appealing and to contain all the infomation you would want in a single glance."
        section3={`"Data visuals is the language of decison making, good ones effectliy convey infomation, great ones enable, inform and improve decison making."`}
        background={"grey-200"}
        font1={"whitesmoke"}
        font2={"cod"}
      />
      <Gallery
        direction="col"
        bg="black"
        height="96"
        items={[<ForecastFaceFonts />, <ForecastFaceColours />]}
      />
      <Marquee
        bg="whitesmoke"
        text="pale"
        items={[
          "Source Code Available",
          "github.com/jjcrl",
          "Source Code Available",
          "github.com/jjcrl",
        ]}
      />{" "}
      {/* <WordsSection
        section1="This is  the last first section."
        section2="And this is still the second section that could be very long on its own."
        section3="and maybe just one section thats a mini ?"
        background={"cod"}
        font1={"pale"}
        font2={"pale"}
      /> */}
      <Footer />
    </>
  );
}
