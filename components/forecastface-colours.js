import ColourPalette from "./colour-pallete";

const ForecastFaceColours = () => {
  return (
    <>
      <h6 className="font-semibold px-5 text-stone-400 leading-normal pt-10 sm:px-10 sm:pt-0">
        Colours — Information through visual understanding.{" "}
      </h6>
      <div className="flex flex-row w-full h-full px-0 pt-10 bg-stone-100 sm:px-10 sm:flex-col sm:pb-10">
        <div className="flex flex-row w-full sm:flex-col" id="contianer">
          <div className="flex flex-row w-screen h-full sm:flex-col sm:w-full">
            <ColourPalette
              hexs={["#91345B", "#AB4358", "#E95B37", "#FCBF56"]}
            />
            <span className="gradient1" id="gradient" />
          </div>

          <div
            className="flex flex-row w-screen h-full sm:flex-col sm:w-full"
            id="contianer"
          >
            <ColourPalette
              hexs={["#F3F3F3", "#CFCBD9", "#5E4D5D", "#050505"]}
            />
            <span className="gradient2" id="gradient" />
          </div>
        </div>
      </div>

      <style jsx>{`
        #contianer {
          height: 75vh;
        }

        .gradient1 {
          display: block;
          background: rgb(252, 191, 86);
          background: linear-gradient(
            360deg,
            rgba(252, 191, 86, 1) 1%,
            rgba(252, 191, 86, 1) 10%,
            rgba(233, 91, 55, 1) 35%,
            rgba(171, 67, 88, 1) 70%,
            rgba(145, 52, 91, 1) 90%
          );
          width: 12vw;
          height: 100%;
          margin: 0;
        }
        .gradient2 {
          margin: 0;
          display: block;
          width: 12vw;
          height: 100%;
          background: rgb(207, 203, 217);
          background: linear-gradient(
            180deg,
            rgb(243, 243, 243, 1) 15%,
            rgba(207, 203, 217, 1) 35%,
            rgba(94, 77, 93, 1) 60%,
            rgba(5, 5, 5, 1) 95%
          );
        }

        @media (min-width: 640px) {
          .gradient1,
          .gradient2 {
            height: 30%;
            width: 100%;
          }

          .gradient1 {
            background: linear-gradient(
              -90deg,
              rgba(252, 191, 86, 1) 1%,
              rgba(252, 191, 86, 1) 10%,
              rgba(233, 91, 55, 1) 35%,
              rgba(171, 67, 88, 1) 70%,
              rgba(145, 52, 91, 1) 90%
            );
          }
          .gradient2 {
            background: linear-gradient(
              90deg,
              rgb(243, 243, 243, 1) 15%,
              rgba(207, 203, 217, 1) 35%,
              rgba(94, 77, 93, 1) 60%,
              rgba(5, 5, 5, 1) 95%
            );
          }
        }
      `}</style>
    </>
  );
};

export default ForecastFaceColours;
