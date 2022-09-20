const ColourPalette = ({ hexs, width }) => {
  return (
    <div className={`grid grid-rows-1 grid-cols-4  m-auto w-full h-full`}>
      {hexs.map((hex, i) => (
        <span
          className={`w-full h-72 m-auto`}
          id="colour"
          style={{
            backgroundColor: `${hexs[i]}`,
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
            {hex}
          </label>
        </span>
      ))}
    </div>
  );
};

export default ColourPalette;
