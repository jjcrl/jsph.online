import Image from "next/image";

const Topper = ({ line, image }) => {
  return (
    <>
      <section data-scroll-section>
        <div className="flex h-screen w-screen">
          <div className={`absolute z-0 bg-transparent flex h-screen w-screen`}>
            <Image src={image} />
          </div>

          <div
            className={`w-screen h-1/7 flex flex-col justify-end pb-5 pl-10 pt-5 bg-stone-100 text-white absolute bottom-0`}
          >
            <h6 className="mix-blend-difference">{line}</h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topper;
