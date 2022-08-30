import Footer from "../../components/footer";
import forecastface from "../../public/images/forecastface.png";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <section data-scroll-section className="flex flex-col">
        <div className="h-screen w-screen" id="works">
          <div className="inset-0 w-screen h-screen absolute z-0">
            <Link href={"/work/work1"}>
              <Image src={forecastface} />
            </Link>
          </div>
          <div className="show h-full w-full">
            <div className="flex flex-col gap-10 h-full w-full justify-end absolute z-10  text-transparent pb-20">
              <h5 className="px-10">ncnews</h5>
              <h6 className="px-10 italic">full stack web app development.</h6>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>
        {`
          .show {
            transition: 0.5s;
            opacity: 0.6;
          }

          #works:hover .show {
            color: white;
            opacity: 1;
          }
        `}
      </style>
    </>
  );
}
