import DialFaceSVG from "./svg/dial-face.svg";
import SunRingSVG from "./svg/sun-ring.svg";
import TempHandSVG from "./svg/temp-hand.svg";

const ForecastFaceItems = () => {
  return (
    <section
      data-scroll-section
      className="flex flex-col bg-stone-100 w-screen h-full pb-44"
    >
      <h5 className="text-center w-2/3 pt-20 pb-20 m-auto italic">
        "Data visuals is the language of decison making, good ones effectliy
        convey infomation, great ones enable, inform and improve decison
        making."
      </h5>
      <div className="flex flex-row px-10 pt-3 bg-stone-100 mt-10">
        <div className="w-1/3 py-10 bg-ink">
          <DialFaceSVG />
        </div>
        <div className="w-1/3 bg-ink pt-16">
          <SunRingSVG />
        </div>
        <div className="w-1/3 bg-ink pt-16">
          <TempHandSVG />
        </div>
      </div>

      <div className="px-20 bg-stone-100 flex pt-10">
        <div className="w-1/3 flex flex-col gap-6">
          <h5>⁰¹ Todays data, at a glance.</h5>
          <h6 className="pr-10">
            At the center of the watch face is the days core pieces of data, so
            you can stay informed at a single glance.
          </h6>
        </div>
        <div className="w-1/3 flex flex-col gap-6 pl-5">
          <h5>⁰² Displaying sunlight hours.</h5>
          <h6 className="pr-10">
            A simple visual depiction of sun rise and sun set and where the sun
            will be at its highest. So you can spend time in the sun.
          </h6>
        </div>{" "}
        <div className="w-1/3 flex flex-col gap-6 pl-5">
          <h5>⁰³ Temperature right now.</h5>
          <h6 className="pr-5">
            Above the moving hand is the temperatire right now. Keeping things
            simple and effective .
          </h6>
        </div>
      </div>
    </section>
  );
};

export default ForecastFaceItems;
