import ColourPalette from "./colour-pallete";

const ForecastFaceColours = () => {
  return (
    <>
      <div className="flex flex-col w-screen h-auto p-10 bg-white">
        <div className="flex flex-col gap-0  m-auto w-full h-full">
          <div className="flex flex-col">
            <ColourPalette
              hexs={["#91345B", "#AB4358", "#E95B37", "#FCBF56"]}
              width={200}
            />
            <span className="gradient1" id="gradient" />
          </div>

          <div className="flex flex-col">
            <ColourPalette
              hexs={["#F3F3F3", "#CFCBD9", "#5E4D5D", "#050505"]}
              width={200}
            />
            <span className="gradient2" id="gradient" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .gradient1 {
          display: block;
          background: rgb(252, 191, 86);
          background: linear-gradient(
            -90deg,
            rgba(252, 191, 86, 1) 1%,
            rgba(252, 191, 86, 1) 10%,
            rgba(233, 91, 55, 1) 35%,
            rgba(171, 67, 88, 1) 70%,
            rgba(145, 52, 91, 1) 90%
          );
          width: 100%;
          height: 11vh;
          margin: auto;
        }
        .gradient2 {
          margin: auto;
          display: block;
          width: 100%;
          height: 11vh;
          background: rgb(207, 203, 217);
          background: linear-gradient(
            90deg,
            rgb(243, 243, 243, 1) 15%,
            rgba(207, 203, 217, 1) 35%,
            rgba(94, 77, 93, 1) 60%,
            rgba(5, 5, 5, 1) 95%
          );
        }
      `}</style>
    </>
  );
};

export default ForecastFaceColours;
