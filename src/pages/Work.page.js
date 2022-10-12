import forecastface from "../../public/images/forecastface-image2.png";
import ncnews from "../../public/images/ncnews-image2.png";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <section data-scroll-section className="flex flex-col h-fit w-screen">
        <div className="block w-screen h-screen relative">
          <div className="inset-0 w-screen h-screen">
            <Image src={ncnews} />
          </div>
          <Link href={"/work/NcNews"}>
            <div
              className="text-white flex flex-col h-screen w-screen justify-end items-start py-5 bottom-0 absolute"
              id="works1"
            >
              <h4 className="px-10 pb-5">Northcoders News</h4>
            </div>
          </Link>
        </div>
        <div className="block w-screen h-screen relative">
          <div className="inset-0 w-screen h-screen">
            <Image src={forecastface} />
          </div>

          <Link href={"/work/ForecastFace"}>
            <div
              className="text-white flex flex-col h-screen w-screen justify-end items-start py-5 bottom-0 absolute"
              id="works2"
            >
              <h4 className="px-10 pb-5">Forecast Face</h4>
            </div>
          </Link>
        </div>
      </section>

      <style jsx>{`
        #works1 {
          opacity: 0;
          transition: opacity 2s linear 1ms;
        }

        #works1:hover {
          opacity: 1;
          background: rgba(0, 0, 0, 0.5);
        }

        #works2 {
          opacity: 0;
          transition: opacity 2s linear 1ms;
        }

        #works2:hover {
          opacity: 1;
          background: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
}
