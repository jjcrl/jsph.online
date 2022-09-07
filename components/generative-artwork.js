const GenerativeArtwork = ({ height, border }) => {
  let n = 0;

  const cells = [];

  for (let i = 0; i < 117; i++) {
    n = Math.floor(Math.random() * 100);
    cells.push(n);
  }
  return (
    <div className="grid">
      {cells.map((n, i) => {
        if (n >= 50) {
          return <span id={`cell-${i}`} className="cell-1"></span>;
        } else if (n >= 30) {
          return <span id={`cell-${i}`} className="cell-2"></span>;
        } else if (n <= 2) {
          return <span id={`cell-${i}`} className="cell-4"></span>;
        } else {
          return <span id={`cell-${i}`} className="cell-3"></span>;
        }
      })}

      <style jsx>{`
        .grid {
          width: 100%;
          height: ${height}rem;
          border: ${border === true ? `solid 0.7rem #181315` : `none`};
          border-radius: 2px;
          margin: auto;
          display: grid;
          grid-template-rows: repeat(9, 1fr);
          grid-template-columns: repeat(13, 1fr);
          padding: ${border === true ? "3rem" : "1rem"};
          background-color: white;
        }
        .cell-1 {
          background-color: white;
          border: solid 1px white;
        }
        .cell-2 {
          background-color: #181315;
          border: solid 1px #181315;
        }
        .cell-3 {
          background-color: #181315;
          border: solid 1px #181315;
        }
        .cell-4 {
          background-color: #412cff;
          border: solid 1px #412cff;
        }
        #cell-45.cell-1,
        #cell-45.cell-2,
        #cell-46.cell-1,
        #cell-46.cell-2,
        #cell-47.cell-2,
        #cell-47.cell-1,
        #cell-57.cell-1,
        #cell-57.cell-2,
        #cell-58.cell-1,
        #cell-58.cell-2,
        #cell-59.cell-2,
        #cell-59.cell-1,
        #cell-71.cell-1,
        #cell-71.cell-2,
        #cell-72.cell-2,
        #cell-72.cell-1,
        #cell-73.cell-1,
        #cell-73.cell-2 {
          background-color: #412cff;
          border: 1px solid #412cff;
        }
      `}</style>
    </div>
  );
};

export default GenerativeArtwork;
