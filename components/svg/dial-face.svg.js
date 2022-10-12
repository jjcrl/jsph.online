const DialFaceSVG = () => {
  return (
    <>
      <div className="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox=" 0 0 250 200"
          className="info-svg"
        >
          <text
            transform="translate(65 25)"
            fontSize="1.5em"
            fontFamily="GT Maru Trial"
            fill="#cfcbd9"
            opacity="30%"
          >
            H:18 L:11
          </text>
          <text
            transform="translate(20 56)"
            fontSize="1em"
            fontFamily="GT Maru Trial"
            fontStyle="italic"
            fill="#cfcbd9"
            opacity="50%"
          >
            Rain, Partially Cloudy
          </text>
          <text
            transform="translate(35 125)"
            fontSize="4em"
            fill="whitesmoke"
            fontFamily="GT Maru Trial"
            id="text"
          >
            {new Date().toLocaleTimeString(undefined, {
              hour12: false,
              hour: "numeric",
            })}
            .
            {new Date().toLocaleTimeString(undefined, {
              hour12: false,
              minute: "numeric",
            })}
          </text>
          <text
            transform="translate(45 165)"
            fontSize="1.5em"
            fontFamily="GT Maru Trial"
            fill="#cfcbd9"
            opacity="50%"
          >
            {new Date().toLocaleDateString(undefined, {
              weekday: "long",
            })}
          </text>
          <text
            transform="translate(58 198)"
            fontSize="1.25em"
            fontFamily="GT Maru Trial"
            fill="#cfcbd9"
            opacity="30%"
          >
            {new Date().toLocaleDateString(undefined, {
              day: "numeric",
              month: "long",
            })}
          </text>
        </svg>
      </div>

      <style jsx>{`
        text {
          filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
        }
        .svg {
          width: 100%;
          height: auto;
          margin: auto;
        }
        .info-svg {
          width: 95%;
          height: auto;
          margin: auto;
        }
      `}</style>
    </>
  );
};

export default DialFaceSVG;
