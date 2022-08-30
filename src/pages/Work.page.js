import Footer from "../../components/footer";
import forecastface from "../../public/images/forecastface.png";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <section data-scroll-section className="flex flex-col">
        <div data-scroll>
          <Link href={"/work/work1"}>
            <div className="h-screen w-screen bg-white" id="works">
              <div className="show">
                <h3 className="p-20 absolute z-10">ncnews</h3>
                <h4 className="p-20 italic absolute z-10">
                  full stack web app development.
                </h4>
                <div className="fixed inset-0 w-screen h-screen z-0">
                  <Image src={forecastface} />
                </div>
              </div>
            </div>
          </Link>{" "}
          <Link href={"/work/work2"}>
            <div
              className="h-screen w-screen bg-white justify-between"
              id="works"
            >
              <div className="show">
                <h3 className="p-20">Title</h3>
                <h4 className="p-20 italic">line</h4>
              </div>
            </div>
          </Link>{" "}
          <Link href={"/work/work3"}>
            <div className="h-screen w-screen bg-white" id="works">
              <div className="show">
                <h3 className="p-20">Title</h3>
                <h4 className="p-20 italic">line</h4>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Footer />

      <style jsx>
        {`
          .show {
            display: flex;
            flex-direction: column;
            justify-content: end;
            flex-wrap: nowrap;
            height: 100%;
            width: 100%;
            color: white;
            align-items: start;
            backgrounf-color: transparent;
            z-index: 10;
          }

          #works:hover .show {
            background-color: rgba(0, 0, 0, 0.1);
            color: white;
          }
        `}
      </style>
    </>
  );
}
