import Footer from "../../components/footer";
import ShowCase from "../../components/showcase";
import Topper from "../../components/topper";
import WordsSection from "../../components/words-section";
import Gallery from "../../components/gallery";
import forecastface from "../../public/images/forecastface-image.png";
import SunRingSVG from "../../components/svg/sun-ring.svg";
import TempHandSVG from "../../components/svg/temp-hand.svg";
import DialFaceSVG from "../../components/svg/dial-face.svg";
import ForecastFaceFonts from "../../components/forecastface-fonts";
import ForecastFaceColours from "../../components/forecastface-colours";
import Marquee from "../../components/marquee";

export default function ForecastFace() {
  return (
    <>
      <Topper
        image={forecastface}
        bg={"black"}
        line="f o r e c a s t _ f a c e _ by jsph.dev"
      />

      <WordsSection
        section1="Weather Data Visualisation."
        section2="A Stand alone webapp for daily weather forecast, with temperature, sun and rain data. Designed after a clock face to prove 24 hour weather forecast at a glance."
        section3="As always , source code is avvaile on github and the hosted site is ..."
        section4="⇥ www.forecastface.netlify.app"
        background={"black"}
        font1={"white"}
        font2={"white"}
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
            backdrop: "ink",
          },
          {
            image: <SunRingSVG />,
            title: "Sun Position Tracking",
            description:
              "Sun rise, highest point and sun set displayed centraly to provide sun data, at a glance.",
            theme: "peachpuff",
            id: "showcase-item-1",
            backdrop: "ink",
          },
          {
            image: <TempHandSVG />,
            title: "Current temperature On The Hour Every Hour.",
            description:
              "As the hand moves around the clock face, it updates to the current temperature.",
            theme: "road",
            id: "showcase-item-2",
            backdrop: "ink",
          },
        ]}
      />
      <WordsSection
        section1="Keeping things simple."
        section2="I wanted this to be simple , visually appealing and to contain all the infomation you would want in a single glance."
        section3={`"Data visuals is the language of decison making, good ones effectliy convey infomation, great ones enable, inform and improve decison making."`}
        background={"gray-50"}
        font1={"cod"}
        font2={"cod"}
      />
      <Gallery
        direction="col"
        bg="gray-50"
        height="96"
        items={[<ForecastFaceFonts />, <ForecastFaceColours />]}
      />
      {/* <Marquee
        bg="gray-50"
        text="whitesmoke"
        items={[
          "Source Code Available",
          "github.com/jjcrl",
          "Source Code Available",
          "github.com/jjcrl",
        ]}
      /> */}
      <Footer />
    </>
  );
}
