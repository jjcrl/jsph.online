const ColourPalette = ({ hexs }) => {
  return (
    <div className="grid grid-rows-4 grid-cols-1 w-full h-full text-xs sm:grid-rows-1 sm:grid-cols-4">
      {hexs.map((hex, i) => (
        <span
          className="w-full h-full"
          id="colour"
          style={{
            backgroundColor: `${hexs[i]}`,
          }}
        >
          <label className="text-white mix-blend-difference relative left-2 top-2 w-min h-min sm:text-3xl sm:font-bold sm:tracking-widest">
            {hex}
          </label>
        </span>
      ))}
    </div>
  );
};

export default ColourPalette;
