import forecastface from "../../public/static/images/forecastface-image2.png";
import ncnews from "../../public/static/images/ncnews-image2.png";
import forecastfacemini from "../../public/static/images/forecastface-mini.png";
import ncnewsmini from "../../public/static/images/ncnews-mini.png";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <section data-scroll-section className="flex flex-col h-full w-screen">
        <div className="block w-screen h-full relative sm:h-screen flex items-end">
          <div className="inset-0 w-screen h-screen hidden sm:block">
            <Image src={ncnews} />
          </div>
          <div className="inset-0 w-screen h-full sm:hidden">
            <Image src={ncnewsmini} />
          </div>
          <Link href={"/work/NcNews"}>
            <div
              className="flex flex-col sm:h-screen w-screen justify-end items-start sm:p-10 sm:bottom-0 absolute text-white h-fit p-5 sm:m-0 -mt-5 bg-blurple"
              id="works1"
            >
              <h3 className="font-medium sm:text-5xl text-xl">
                Northcoders News
              </h3>
            </div>
          </Link>
        </div>
        <div className="block w-screen h-full relative sm:h-screen flex items-end">
          <div className="inset-0 w-screen h-screen sm:block hidden">
            <Image src={forecastface} />
          </div>
          <div className="inset-0 w-screen h-full sm:hidden">
            <Image src={forecastfacemini} />
          </div>

          <Link href={"/work/ForecastFace"}>
            <div
              className="flex flex-col sm:h-screen w-screen justify-end items-start sm:p-10 sm:bottom-0 absolute text-white h-fit p-5 sm:m-0 bg-road"
              id="works2"
            >
              <h3 className="font-medium sm:text-5xl text-xl">Forecast Face</h3>
            </div>
          </Link>
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 640px) {
          #works1 {
            opacity: 0;
            transition: opacity 1s linear;
          }

          #works1:hover {
            opacity: 1;
            background: rgba(0, 0, 0, 0.5);
          }

          #works2 {
            opacity: 0;
            transition: opacity 1s linear;
            background: transparent;
          }

          #works2:hover {
            opacity: 1;
            background: rgba(0, 0, 0, 0.5);
          }
        }
      `}</style>
    </>
  );
}
