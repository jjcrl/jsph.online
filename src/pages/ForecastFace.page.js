import Footer from "../../components/footer";
import Topper from "../../components/topper";
import WordsSection from "../../components/words-section";
import Gallery from "../../components/gallery";

import ForecastFaceFonts from "../../components/forecastface-fonts";
import ForecastFaceColours from "../../components/forecastface-colours";
import ForecastFaceItems from "../../components/ForecastFaceSVGItems";

export default function ForecastFace() {
  return (
    <>
      <Topper line="f o r e c a s t _ f a c e _" />
      <WordsSection
        section1="Weather Data Visualisation."
        section2="A Stand alone webapp for daily weather forecast, with temperature, sun and rain data. Designed after a clock face to prove 24 hour weather forecast at a glance."
        section3="As always , source code is avvaile on github and the hosted site is ..."
        section4="⇥ www.forecastface.netlify.app"
        sectionclass="bg-white w-screen h-max flex flex-row justify-between py-16 px-20 pb-10"
      />
      <ForecastFaceItems />
      <Gallery
        direction="col"
        items={[<ForecastFaceFonts />, <ForecastFaceColours />]}
      />

      <Footer />
    </>
  );
}
