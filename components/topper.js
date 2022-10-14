import Image from "next/image";

const Topper = ({ line, image }) => {
  return (
    <>
      <section data-scroll-section>
        <div className="flex h-72 w-screen sm:h-screen">
          <div className="absolute z-0 bg-transparent flex h-1/3 w-screen sm:h-screen">
            <Image src={image} />
          </div>

          <div className="w-screen h-fit py-5 flex flex-col justify-end bg-stone-100 text-white absolute top-60 px-5 sm:bottom-0 sm:h-1/7 sm:top-auto">
            <h6 className="mix-blend-difference">{line}</h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topper;
