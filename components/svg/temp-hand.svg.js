const TempHandSVG = () => {
  return (
    <>
      <div className="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox=" 0 0 250 200"
          className="hand-svg"
        >
          <line
            x1={0}
            y1={200}
            x2={70}
            y2={130}
            stroke="whitesmoke"
            strokeWidth={13}
            style={{ opacity: "30%" }}
          />
          <text
            x={140}
            y={55}
            fontFamily="GT Maru Trial"
            fontSize="4em"
            fill="#cfcbd9"
          >
            18°
          </text>
          <text
            x={110}
            y={25}
            fontFamily="GT Maru Trial"
            fontSize="2.7em"
            fill="#5e4d5d"
            opacity="70%"
            alignmentBaseline="middle"
            transform="rotate(45 45 45)"
          >
            21
          </text>
          <text
            x={10}
            y={30}
            fontFamily="GT Maru Trial"
            fontSize="2.7em"
            fill="#5e4d5d"
            opacity="70%"
            alignmentBaseline="middle"
            transform="rotate(25 25 25)"
          >
            20
          </text>
          <text
            x={205}
            y={18}
            fontFamily="GT Maru Trial"
            fontSize="2.7em"
            fill="#5e4d5d"
            opacity="70%"
            alignmentBaseline="middle"
            transform="rotate(55 55 55)"
          >
            22
          </text>
        </svg>
      </div>

      <style jsx>
        {`
          .svg {
            width: 100%;
            height: auto;
          }

          line {
            stroke-linecap: round;
            stroke-linejoin: round;
          }
        `}
      </style>
    </>
  );
};

export default TempHandSVG;
