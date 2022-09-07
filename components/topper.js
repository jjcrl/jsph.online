import Image from "next/image";

const Topper = ({ line, bg, image }) => {
  return (
    <>
      <section data-scroll-section>
        <div className="flex h-screen w-screen">
          <div className={`absolute z-0 bg-${bg} flex h-screen w-screen`}>
            <Image src={image} />
          </div>

          <div
            className={`w-screen h-1/7 flex flex-col justify-end pb-10 pl-10 bg-${bg} text-white absolute bottom-0`}
          >
            <h7 className="mix-blend-difference tracking-loose italic">
              {line}
            </h7>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topper;
