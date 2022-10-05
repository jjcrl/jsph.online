import Footer from "../../components/footer";
import forecastface from "../../public/images/forecastface-image.png";
import ncnews from "../../public/images/ncnews-image2.png";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <section data-scroll-section className="flex flex-col h-fit w-screen">
        <div className="block w-screen h-screen relative">
          <Link href={"/work/NcNews"}>
            <div className="inset-0 w-screen h-screen">
              <Image src={ncnews} />
            </div>
          </Link>
          <div className="text-white flex flex-col h-min w-screen gap-5 justify-end	items-start	pb-10 tracking-widest bg-none bottom-0 absolute">
            <h5 className="px-10 mix-blend-difference">ncnews</h5>
            <h6 className="px-10 italic opacity-70 mix-blend-difference">
              full stack web app development.
            </h6>
          </div>
        </div>
        <div className="block w-screen h-screen relative">
          <Link href={"/work/ForecastFace"}>
            <div className="inset-0 w-screen h-screen">
              <Image src={forecastface} />
            </div>
          </Link>

          <div className="text-white flex flex-col h-min w-screen gap-5 justify-end	items-start	pb-10 tracking-widest bg-transparent bottom-0 absolute mix-blend-difference">
            <h5 className="px-10">forecast face</h5>
            <h6 className="px-10 italic opacity-70">
              weather data visualisation.
            </h6>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
