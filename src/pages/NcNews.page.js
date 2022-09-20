import Footer from "../../components/footer";
import ShowCase from "../../components/showcase";
import Topper from "../../components/topper";
import WordsSection from "../../components/words-section";
import Gallery from "../../components/gallery";
import ncnews from "../../public/images/ncnews-image.png";
import Marquee from "../../components/marquee";
import Artwork from "../../components/ncnews-artwork";
import GalleryGrid from "../../components/ncnews-artwork-gallery";
import NcnewsColorPallette from "../../components/ncnews-colour-pallette";
import NcnewsConversation from "../../components/ncnews-coversation";

export default function Work2() {
  return (
    <>
      <Topper image={ncnews} bg={"white"} line="n c _ n e w s _ by jsph.dev" />
      <WordsSection
        section1="Full stack, web app development."
        section2="A one week project completed during the Northcoders coding bootcamp built with React.js, Axios, Node.js, and hosted with Netlify. This project also utilises my Back End project, also completed during the bootcamp."
        section3="The backend is a demonstration of a RESTful API written in JavaScript and using Express JS alongside PostgreSQL, fully unit tested with Jest."
        section4="⇥ www.github.com/jjcrl/ncnews-frontend"
        sectionclass="bg-white w-screen h-max flex flex-row justify-between py-16 px-20 pb-28"
      />
      {/* <ShowCase
        items={[
          {
            image: <p>hello</p>,
            title: "Interactivty monitored and displayed.",
            description:
              "A selection of symbols for likes, comments and total engagment.",
            id: "showcase-item-0",
            wordsclass: "w-2/4 h-screen bg-blurple",
            imageclass: "w-2/4 bg-blurple",
          },
          {
            image: <p>hello</p>,
            title: "Top Articles",
            description: "Most engaged articles up top.",
            id: "showcase-item-1",
            wordsclass: "w-2/4 h-screen bg-blurple",
            imageclass: "w-2/4 bg-blurple",
          },
          {
            image: <p>hello</p>,
            title: "User Capabilities",
            description:
              "Voting, commenting and posting, creating new topics and leading a discussion, all possible for ncnews users.",
            id: "showcase-item-2",
            wordsclass: "w-2/4 h-screen bg-blurple",
            imageclass: "w-2/4 bg-blurple",
          },
        ]}
      /> */}
      {/* <WordsSection
        sectionclass="bg-pale w-screen h-max flex flex-row justify-between py-16 px-20 pb-28"
        section1="inerativity and engagment."
        section2={"section two about nc news and how it was built."}
        section3="Why i did it? and whats good about it"
        section4="you can find it here"
      /> */}
      <Gallery items={[<NcnewsConversation />, <Artwork />]} />
      <Marquee
        bg="pale"
        text="pale"
        items={[
          "Source Code Available",
          "github.com/jjcrl",
          "Source Code Available",
          "github.com/jjcrl",
        ]}
      />{" "}
      <WordsSection
        sectionclass="bg-neutral-100 w-screen h-max flex flex-row justify-between py-16 px-20 pb-28 "
        section1="Like what you see?"
        section2="hell this is section2 and it is the last section."
        section3="hell this is section2 and it is the last section."
        section4="hell this is section2 and it is the last section."
      />
      <Footer />
    </>
  );
}
