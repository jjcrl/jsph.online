const SunRingSVG = () => {
  return (
    <>
      <div className="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox=" 0 0 250 200"
          className="sun-svg"
        >
          <path
            fill="url(#pattern1)"
            opacity="70%"
            d="M46.2,-9.3C46.2,9.3,23.1,18.6,3.8,18.6C-15.4,18.6,-30.8,9.3,-30.8,-9.3C-30.8,-27.8,-15.4,-55.6,3.8,-55.6C23.1,-55.6,46.2,-27.8,46.2,-9.3Z"
            transform="translate(100 255) scale(3.9)"
            className="sun-ring"
          />

          <path
            fill="none"
            stroke="peachpuff"
            strokeWidth={0.5}
            opacity="60%"
            strokeDasharray={30}
            strokeLinecap="round"
            d="M46.2,-9.3C46.2,9.3,23.1,18.6,3.8,18.6C-15.4,18.6,-30.8,9.3,-30.8,-9.3C-30.8,-27.8,-15.4,-55.6,3.8,-55.6C23.1,-55.6,46.2,-27.8,46.2,-9.3Z"
            transform="translate(99 240) scale(3.9)"
            className="sun-ring"
          />
          <circle
            r={180}
            cx={125}
            cy={370}
            fill="black"
            stroke="#c67477"
            strokeWidth={0.75}
          />
        </svg>
      </div>
      <style jsx>
        {`
          .svg {
            height: 100vh;
            width: 100%;
            margin: auto;
          }
          .sun-svg {
            background-color: #050505;
            background-color: black;
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </>
  );
};

export default SunRingSVG;
