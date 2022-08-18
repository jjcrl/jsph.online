import Image from "next/image";

const Topper = ({ line1, line2, bg }) => {
  return (
    <>
      <section data-scroll-section>
        <div className="absolute z-0 bg-black">
          <Image src={bg} />
        </div>

        <div className="w-screen h-screen flex flex-col justify-end pb-20 pl-20 text-road relative">
          <h3>{line1}</h3>
          <br />
          <h4 className="italic">{line2}</h4>
        </div>
      </section>
    </>
  );
};

export default Topper;
