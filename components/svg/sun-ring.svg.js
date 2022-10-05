const SunRingSVG = () => {
  return (
    <>
      <div className="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox=" 0 0 250 200"
          className="sun-svg"
        >
          <defs>
            <pattern
              id="pattern1"
              x="10"
              y="10"
              width="1"
              height="1"
              patternUnits="userSpaceOnUse"
            >
              <circle
                r={0.15}
                cx={0.25}
                cy={0.25}
                style={{ fill: "peachpuff", opacity: "50%" }}
              />
            </pattern>
            <pattern
              id="pattern2"
              x="10"
              y="10"
              width="1"
              height="1"
              patternUnits="userSpaceOnUse"
            >
              <circle
                r={0.3}
                cx={0.5}
                cy={0.5}
                style={{ fill: "#5e4d5d", opacity: "30%" }}
              />
            </pattern>
          </defs>

          <path
            fill="url(#pattern1)"
            d="M46.2,-9.3C46.2,9.3,23.1,18.6,3.8,18.6C-15.4,18.6,-30.8,9.3,-30.8,-9.3C-30.8,-27.8,-15.4,-55.6,3.8,-55.6C23.1,-55.6,46.2,-27.8,46.2,-9.3Z"
            transform="translate(100 255) scale(3.9)"
            className="sun-ring"
          />

          <path
            fill="none"
            stroke="peachpuff"
            strokeWidth={0.5}
            opacity="80%"
            strokeDasharray={30}
            strokeLinecap="round"
            d="M46.2,-9.3C46.2,9.3,23.1,18.6,3.8,18.6C-15.4,18.6,-30.8,9.3,-30.8,-9.3C-30.8,-27.8,-15.4,-55.6,3.8,-55.6C23.1,-55.6,46.2,-27.8,46.2,-9.3Z"
            transform="translate(99 240) scale(3.9)"
            className="sun-ring"
          />
          <circle
            r={185}
            cx={125}
            cy={370}
            fill="black"
            stroke="#c67477"
            strokeWidth={0.35}
          />
          <circle
            r={185}
            cx={125}
            cy={370}
            fill="url(#pattern2)"
            stroke="#c67477"
            strokeWidth={0.35}
          />
        </svg>
      </div>
      <style jsx>
        {`
          .svg {
            height: auto;
            width: 100%;
            margin-bottom: auto;
          }
          .sun-svg {
            width: 100%;
            height: auto;
          }
        `}
      </style>
    </>
  );
};

export default SunRingSVG;
