import DialFaceSVG from "./svg/dial-face.svg";
import SunRingSVG from "./svg/sun-ring.svg";
import TempHandSVG from "./svg/temp-hand.svg";

const ForecastFaceItems = () => {
  return (
    <section
      data-scroll-section
      className="flex flex-col bg-white w-screen h-full pb-10"
    >
      <h5 className="text-center w-2/3 p-10 m-auto">
        "Data visuals is the language of decison making, good ones effectliy
        convey infomation, great ones enable, inform and improve decison
        making."
      </h5>
      <div className="flex flex-row p-10 w-screen">
        <div className="w-1/3 py-10 bg-ink">
          <DialFaceSVG />
        </div>
        <div className="w-1/3 bg-ink mt-auto pt-16">
          <SunRingSVG />
        </div>
        <div className="w-1/3 bg-ink mt-auto pt-16">
          <TempHandSVG />
        </div>
      </div>

      <div className="px-20 bg-white flex pt-10">
        <div className="w-1/3 flex flex-col gap-4 pr-10">
          <h5>Todays data, at a glance.</h5>
          <h6 className="pr-10">
            At the center of the watch face is the days core peices of data, so
            you can stay informed quickly.
          </h6>
        </div>
        <div className="w-1/3 flex flex-col gap-4 pr-10">
          <h5>Tracking the sun.</h5>
          <h6 className="pr-10">
            A simple visual to show where the sun will be at its heights, aswell
            as its rise and its fall. showing the range of the days amount of
            sun in a simple yet sophisipocated way.
          </h6>
        </div>{" "}
        <div className="w-1/3 flex flex-col gap-4 pr-10">
          <h5>Temperature right now.</h5>
          <h6 className="pr-10">some text</h6>
        </div>
      </div>
    </section>
  );
};

export default ForecastFaceItems;
