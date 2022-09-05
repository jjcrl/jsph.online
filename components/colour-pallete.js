const ColourPalette = ({ colours, width, rows, columns }) => {
  return (
    <div className={`flex flex-row  w-full h-fit gap-0 m-auto`}>
      {colours.map((colour) => (
        <span
          className={`w-${width} h-${width} bg-${colour} text-ink p-5`}
          id="colour"
          style={{
            width: `25vw`,
            height: `40vh`,
            backgroundColor: `${colour}`,
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
