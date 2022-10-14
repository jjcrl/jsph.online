import DialFaceSVG from "./svg/dial-face.svg";
import SunRingSVG from "./svg/sun-ring.svg";
import TempHandSVG from "./svg/temp-hand.svg";

const ForecastFaceItems = () => {
  return (
    <section className="flex flex-col bg-stone-100 w-screen h-full pb-20 pt-10 sm:pt-5">
      <h3 className="text-left w-full pb-5 px-5 m-auto sm:px-28 sm:text-center sm:pb-20 sm:pt-10 font-bold text-2xl sm:text-5xl text-white mix-blend-difference">
        "Data visuals are the language of decison making, good ones effectliy
        convey infomation. Great ones enable, inform and improve decison
        making."
      </h3>

      <div className="flex flex-col pt-3 bg-stone-100 mt-10 sm:flex-row sm:px-10 sm:hidden">
        <div className="w-96 py-10 bg-ink m-auto">
          <p className="text-white px-5 sm:hidden absolute -mt-10 opacity-10">
            ⁰¹
          </p>
          <DialFaceSVG />
        </div>
        <div className="w-full flex flex-col gap-3 px-5 py-10">
          <h5>⁰¹ Todays data, at a glance.</h5>
          <h6 className="px-5">
            At the center of the watch face is the days core pieces of data, so
            you can stay informed at a single glance.
          </h6>
        </div>
        <div className="w-96 bg-ink pt-16 m-auto">
          <p className="text-white px-5 sm:hidden absolute opacity-10 -mt-14">
            ⁰²
          </p>
          <SunRingSVG />
        </div>
        <div className="w-full flex flex-col gap-3 px-5 py-10">
          <h5>⁰² Displaying sunlight hours.</h5>
          <h6 className="px-5">
            A simple visual depiction of sun rise and sun set and where the sun
            will be at its highest. So you can spend time in the sun.
          </h6>
        </div>{" "}
        <div className="w-96 bg-ink pt-16 m-auto">
          <p className="text-white px-5 sm:hidden -mt-12 opacity-10">⁰³</p>
          <TempHandSVG />
        </div>
        <div className="w-full flex flex-col gap-3 px-5 py-10">
          <h5>⁰³ Temperature right now.</h5>
          <h6 className="px-5">
            Above the moving hand is the temperatire right now. Keeping things
            simple and effective .
          </h6>
        </div>
      </div>

      <div className="hidden sm:flex flex-col pt-3 bg-stone-100 mt-10 sm:flex-row sm:px-10">
        <div className="w-full py-10 bg-ink">
          <p className="text-white px-5 sm:hidden absolute -mt-10">⁰¹</p>
          <DialFaceSVG />
        </div>
        <div className="w-full bg-ink pt-16">
          <p className="text-white px-5 sm:hidden absolute">⁰²</p>
          <SunRingSVG />
        </div>
        <div className="w-full bg-ink pt-16">
          <p className="text-white px-5 sm:hidden -mt-10">⁰³</p>
          <TempHandSVG />
        </div>
      </div>

      <div className="hidden px-10 bg-stone-100 pt-10 flex-col gap-10 sm:flex-row sm:px-20 sm:flex">
        <div className="w-full flex flex-col gap-3">
          <h5>⁰¹ Todays data, at a glance.</h5>
          <h6 className="px-5">
            At the center of the watch face is the days core pieces of data, so
            you can stay informed at a single glance.
          </h6>
        </div>
        <div className="w-full flex flex-col gap-3">
          <h5>⁰² Displaying sunlight hours.</h5>
          <h6 className="px-5">
            A simple visual depiction of sun rise and sun set and where the sun
            will be at its highest. So you can spend time in the sun.
          </h6>
        </div>{" "}
        <div className="w-full flex flex-col gap-3">
          <h5>⁰³ Temperature right now.</h5>
          <h6 className="px-5">
            Above the moving hand is the temperatire right now. Keeping things
            simple and effective .
          </h6>
        </div>
      </div>
    </section>
  );
};

export default ForecastFaceItems;
