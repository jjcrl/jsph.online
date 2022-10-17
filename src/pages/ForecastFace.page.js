import Footer from "../../components/footer";
import Topper from "../../components/topper";
import WordsSection from "../../components/words-section";
import Gallery from "../../components/gallery";
import ForecastFaceFonts from "../../components/forecastface-fonts";
import ForecastFaceColours from "../../components/forecastface-colours";
import ForecastFaceItems from "../../components/ForecastFaceSVGItems";
import forecastface from "../../public/static/images/forecastface-image2.png";

export default function ForecastFace() {
  return (
    <>
      <Topper line="Forecast Face" image={forecastface} />
      <WordsSection
        section1="Inspired, Simple and Effective. Weather data at a glance."
        section2="A Stand alone webapp for daily weather forecast, with temperature, sun and rain data. Designed after a clock face to prove 24 hour weather forecast at a glance."
        section3="As always , source code is avvaile on github and the hosted site is ..."
        section4="⇥ www.forecastface.netlify.app"
        type={1}
      />

      <Gallery
        items={[
          <ForecastFaceItems />,
          <ForecastFaceFonts />,
          <ForecastFaceColours />,
        ]}
      />

      <WordsSection
        section1="Want to know more?"
        section2="As always github version controll was used throught, meaning you can snoop around to your hearts content."
        section3="— www.github.com/jjcrl/forecast-face"
        type={1}
      />

      <Footer />
    </>
  );
}
