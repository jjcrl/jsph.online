const ForecastFaceFront = () => {
  return (
    <>
      <div className="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox=" -70 -15 400 220"
          className="face-svg"
        >
          <defs>
            <linearGradient id="a" x1={0} x2={1} y1={1} y2={0}>
              <stop offset="0%" stopColor="#fcbf56" />
              <stop offset="5%" stopColor="#fcbf56" />
              <stop offset="50%" stopColor="#e95b37" />
              <stop offset="90%" stopColor="#ab4358" />
              <stop offset="100%" stopColor="#91345b" />
            </linearGradient>
            <path d="M35,110a90,90 0 1,0 180,0a90,90 0 1,0 -180,0" id="clock" />

            <pattern
              id="pattern1"
              x="10"
              y="10"
              width="1"
              height="1"
              patternUnits="userSpaceOnUse"
            >
              <circle r={0.3} cx={0.5} cy={0.5} style={{ fill: "peachpuff" }} />
            </pattern>
          </defs>

          <g>
            <text
              fontFamily="GT Maru Trial"
              fontSize="2em"
              fill="#cfcbd9"
              id="temp"
              x={-21}
              y={70}
            >
              17°
            </text>

            <text
              fontFamily="GT Maru Trial"
              fontSize="2em"
              fill="#cfcbd9"
              id="temp"
              x={210}
              y={165}
            >
              10°
            </text>

            <text transform="translate(520,-320) rotate(90) scale(2)">
              <textPath
                fontFamily="GT Maru Trial"
                href="#clock"
                textLength={550}
                fill="#5e4d5d"
                opacity="70%"
                fontSize="0.75em"
                id="numbers"
                wordSpacing={10}
                letterSpacing={5}
                startOffset={-5}
              >
                <tspan> </tspan>
                <tspan rotate={180}>42</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>32</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>22</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>12</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>02</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>91</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">18</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">17</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">16</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">15</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">14</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">13</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">12</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">11</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">10</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">9</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">8</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>7</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>6</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>5</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>4</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>3</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>2</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>1</tspan>
                <tspan> </tspan>
              </textPath>
            </text>

            <text transform="translate(180,30) rotate(90) scale(2)">
              <textPath
                fontFamily="GT Maru Trial"
                href="#clock"
                textLength={550}
                fill="#5e4d5d"
                opacity="70%"
                fontSize="0.75em"
                id="numbers"
                wordSpacing={10}
                letterSpacing={5}
                startOffset={-5}
              >
                <tspan> </tspan>
                <tspan rotate={180}>42</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>32</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>22</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>12</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>02</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>91</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">18</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">17</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">16</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">15</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">14</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">13</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">12</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">11</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">10</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">9</tspan>
                <tspan> </tspan>
                <tspan alignmentBaseline="hanging">8</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>7</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>6</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>5</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>4</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>3</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>2</tspan>
                <tspan> </tspan>
                <tspan rotate={180}>1</tspan>
                <tspan> </tspan>
              </textPath>
            </text>
            <path
              fill="url(#pattern1)"
              stroke="peachpuff"
              strokeWidth={0.1}
              d="M46.2,-9.3C46.2,9.3,23.1,18.6,3.8,18.6C-15.4,18.6,-30.8,9.3,-30.8,-9.3C-30.8,-27.8,-15.4,-55.6,3.8,-55.6C23.1,-55.6,46.2,-27.8,46.2,-9.3Z"
              transform="translate(-55 285) scale(2) rotate(30)"
              opacity="20%"
              id="sunring"
            />
            <path
              fill="url(#pattern1)"
              stroke="peachpuff"
              strokeWidth={0.1}
              d="M46.2,-9.3C46.2,9.3,23.1,18.6,3.8,18.6C-15.4,18.6,-30.8,9.3,-30.8,-9.3C-30.8,-27.8,-15.4,-55.6,3.8,-55.6C23.1,-55.6,46.2,-27.8,46.2,-9.3Z"
              transform="translate(290 -45) scale(2) rotate(30)"
              opacity="20%"
              id="sunring"
            />

            <line
              x1={-100}
              y1={900}
              x2={-10}
              y2={130}
              stroke="whitesmoke"
              strokeLinecap="round"
              strokeWidth={3}
              opacity="40%"
            />
            <line
              x1={600}
              y1={-900}
              x2={260}
              y2={90}
              stroke="whitesmoke"
              strokeLinecap="round"
              strokeWidth={3}
              opacity="40%"
            />

            <path
              className="path"
              stroke="url(#a)"
              fill="transparent"
              strokeWidth={1.5}
              d="M24.4-30.6c6.4 6.9 10.1 15.4 12.5 24.7 2.5 9.4 3.6 19.6-.1 28.1S24.6 37.5 15.1 40.6c-9.5 3.1-20.1 2.6-29-1.2-9-3.7-16.3-10.7-20.8-19.1-4.5-8.4-6.2-18.1-4.6-27.3 1.6-9.1 6.4-17.8 13.5-24.5 7.1-6.8 16.5-11.6 25.6-11.4 9.2.2 18.2 5.4 24.6 12.3Z"
              transform="translate(-30 280) rotate(500) scale(3)"
              pathLength={1}
              id="tempring"
            />
            <path
              className="path"
              stroke="url(#a)"
              fill="transparent"
              strokeWidth={1.5}
              d="M24.4-30.6c6.4 6.9 10.1 15.4 12.5 24.7 2.5 9.4 3.6 19.6-.1 28.1S24.6 37.5 15.1 40.6c-9.5 3.1-20.1 2.6-29-1.2-9-3.7-16.3-10.7-20.8-19.1-4.5-8.4-6.2-18.1-4.6-27.3 1.6-9.1 6.4-17.8 13.5-24.5 7.1-6.8 16.5-11.6 25.6-11.4 9.2.2 18.2 5.4 24.6 12.3Z"
              transform="translate(320 -90) rotate(200) scale(3)"
              pathLength={1}
              id="tempring"
            />
          </g>
        </svg>
      </div>

      <style jsx>
        {`
          .svg {
            width: 100%;
            height: auto;
            background-color: black;
          }
          path {
            stroke-linecap: round;
            stroke-linejoin: round;
          }
          .face-svg {
            width: 100%;
            height: auto;
          }
          #temp {
            letter-spacing: 2px;
          }
        `}
      </style>
    </>
  );
};

export default ForecastFaceFront;
