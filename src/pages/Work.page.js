import Footer from "../../components/footer";
import forecastface from "../../public/images/forecastface-image.png";
import ncnews from "../../public/images/ncnews-image.png";
import Image from "next/image";
import Link from "next/link";
import Marquee from "../../components/marquee";

export default function Work() {
  return (
    <>
      <section data-scroll-section className="flex flex-col gap-7">
        <Link href={"/work/ForecastFace"}>
          <div className="h-screen w-screen" id="works">
            <div className="inset-0 w-screen h-screen absolute z-0">
              <Image src={forecastface} />
            </div>
            <div className="show">
              <div className="text-white relative flex flex-col h-screen w-screen gap-5 justify-end	items-start	pb-20">
                <h5 className="px-10">forecast face</h5>
                <h6 className="px-10 italic">weather data visualisation.</h6>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/work/NcNews"}>
          <div className="h-screen w-screen" id="works">
            <div className="inset-0 w-screen h-screen absolute z-0 bg-white block py-20">
              <Image src={ncnews} />
            </div>
            <div className="show">
              <div className="text-black relative flex flex-col h-screen w-screen gap-5 justify-end items-start	pb-20">
                <h5 className="px-10">ncnews</h5>
                <h6 className="px-10 italic">
                  full stack web app development.
                </h6>
              </div>
            </div>
          </div>
        </Link>
      </section>
      <Marquee
        bg="gray-50"
        text="road"
        items={[
          "☺️ Currently open to new opertunities ☺️",
          "~ Let's get creative ~",
        ]}
      />{" "}
      <Footer />
      <style jsx>
        {`
          #works {
            transition: 5s;
          }
          .show {
            width: 100%;
            height: 100%;
            transition: 5s;
            opacity: 0;
            padding-left: 1.5em;
          }
          #works:hover .show {
            opacity: 1;
          }

          #works:hover {
            opacity: 75%;
          }
        `}
      </style>
    </>
  );
}
