const ColourPalette = ({ colours, width, rows, columns }) => {
  return (
    <div
      className={`grid grid-cols-4 grid-rows-1 w-full h-fit gap-0 grid-row-start-2 grid-row-end-2 m-auto`}
    >
      {colours.map((colour, index) => (
        <span
          className={`w-${width} h-${width} bg-${colour} text-ink p-5`}
          id="colour"
          style={{
            width: `25vw`,
            height: `40vh`,
            backgroundColor: `${colour}`,
            // color: `${colour[1] <= "1" ? " #f5f5f5" : "#181513"}`,
            // color: "white",
            // colorBlendMode: "difference",
            // padding: "15px 20px",
            // fontFamily: "system-ui",
            // fontSize: `${width / 110}em`,
            // fontWeight: 600,
            // textAlign: "right",
          }}
        >
          <label
            style={{
              color: "white",
              fontSize: `${width / 70}em`,
              fontWeight: 700,
              mixBlendMode: "difference",
            }}
          >
            {colour}
          </label>
        </span>
      ))}
    </div>
  );
};

export default ColourPalette;
