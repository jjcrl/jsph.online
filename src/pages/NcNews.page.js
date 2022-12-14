import Footer from "../../components/footer";
import Topper from "../../components/topper";
import WordsSection from "../../components/words-section";
import Gallery from "../../components/gallery";
import Artwork from "../../components/ncnews-artwork";
import NcNewsEngagement from "../../components/ncnews-engagment";
import NcNewsShowcase from "../../components/ncnews.showcase";
import NcNewsFront from "../../components/ncnews-front";

import ncnews from "../../public/static/images/ncnews-image2.png";

export default function Work2() {
  return (
    <>
      <Topper
        image={ncnews}
        line="Northcoders News"
        showcase={<NcNewsShowcase />}
      />
      <WordsSection
        section1="Full stack, web app development."
        section2="A one week project completed during the Northcoders coding bootcamp built with React.js, Axios, Node.js, and hosted with Netlify. This project also utilises my Back End project, also completed during the bootcamp."
        section3="The backend is a demonstration of a RESTful API written in JavaScript and using Express JS alongside PostgreSQL, fully unit tested with Jest."
        section4="⇥ www.github.com/jjcrl/ncnews-frontend"
        type={1}
      />
      <Gallery items={[<NcNewsFront />, <NcNewsEngagement />, <Artwork />]} />
      <WordsSection
        section1="Like what you see?"
        section2="hell this is section2 and it is the last section."
        section3="hell this is section2 and it is the last section."
        section4="hell this is section2 and it is the last section."
        type={1}
      />
      <Footer />
    </>
  );
}
