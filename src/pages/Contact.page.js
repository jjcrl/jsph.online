import WordsSection from "../../components/words-section";
import Footer from "../../components/footer";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col">
        <section data-scroll-section>
          <div className="w-screen h-screen flex flex-row">
            <div className="w-1/2 h-screen bg-gray-50 flex">
              <div className="m-auto w-2/3 flex flex-col gap-5">
                <h4>Hello</h4>
                <h6>
                  Do you have a question, or a problem you would like some fresh
                  perspective on? Want to collaborate or want to be freinds and
                  have a chat and a brew?
                </h6>
                <h6>
                  Whatever it is, feel free to reach out. I'm are happy to talk.
                </h6>
                <br />
                <h6>
                  You can reach me at{" "}
                  <span className="underline">hello@jsph.dev</span>
                </h6>
              </div>
            </div>
            <div className="w-1/2 h-screen bg-boyblue flex">
              <div className="m-auto">
                <p className="text-center">this will be an image!</p>
              </div>
            </div>
          </div>
        </section>

        <WordsSection
          background={"gray-50"}
          section1="section1"
          section2="section2"
          section3="section3"
          section4="section4"
        />
        <Footer />
      </div>
    </>
  );
}
