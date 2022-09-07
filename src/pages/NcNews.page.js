import Footer from "../../components/footer";
import ShowCase from "../../components/showcase";
import Topper from "../../components/topper";
import WordsSection from "../../components/words-section";
import Gallery from "../../components/gallery";
import ncnews from "../../public/images/ncnews-image.png";
import Marquee from "../../components/marquee";
import Artwork from "../../components/ncnews-artwork";

export default function Work2() {
  return (
    <>
      <Topper image={ncnews} bg={"white"} line="n c _ n e w s _ by jsph.dev" />
      <WordsSection
        section1="Full stack, web app development."
        bg="white"
        font1="cod"
        font2="cod"
        section2="A one week project completed during the Northcoders coding bootcamp built with React.js, Axios, Node.js, and hosted with Netlify. This project also utilises my Back End project, also completed during the bootcamp."
        section3="The backend is a demonstration of a RESTful API written in JavaScript and using Express JS alongside PostgreSQL, fully unit tested with Jest."
        section4="⇥ www.github.com/jjcrl/ncnews-frontend"
      />
      <ShowCase
        items={[
          {
            image: <p>hello</p>,
            title: "Interactivty monitored and displayed.",
            description:
              "A selection of symbols for likes, comments and total engagment.",
            theme: "gray-50",
            id: "showcase-item-0",
            backdrop: "gray-50",
          },
          {
            image: <p>hello</p>,
            title: "Top Articles",
            description: "Most engaged articles up top.",
            theme: "cod",
            id: "showcase-item-1",
            backdrop: "cod",
          },
          {
            image: <p>hello</p>,
            title: "User Capabilities",
            description:
              "Voting, commenting and posting, creating new topics and leading a discussion, all possible for ncnews users.",
            theme: "cod",
            id: "showcase-item-2",
            backdrop: "cod",
          },
        ]}
      />
      <Gallery direction="col" bg="white" height="96" items={[<Artwork />]} />
      <Marquee
        bg="gray-50"
        text="whitesmoke"
        items={[
          "Source Code Available",
          "github.com/jjcrl",
          "Source Code Available",
          "github.com/jjcrl",
        ]}
      />{" "}
      <WordsSection
        bg="gray-50"
        font1="cod"
        font2="cod"
        section1="Like what you see?"
        section2="hell this is section2 and it is the last section."
        section3="hell this is section2 and it is the last section."
        section4="hell this is section2 and it is the last section."
      />
      <Footer />
    </>
  );
}
