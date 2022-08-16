const WordsSection = () => {
  return (
    <>
      <section className="words-section-container" data-scroll-section>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing.</h2>

        <div className="flex-end">
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a massa
            sed ligula posuere tempor ut nec erat.
          </h4>

          <ul>
            <li>Vivamus ac est sed felis viverra pharetra vitae vel arcu.</li>
            <li>Praesent dictum, et eleifend sem.</li>
            <li>Etiam et ante suscipit, mattis metus sed, enim.</li>
          </ul>
        </div>
      </section>

      <style jsx>{`
        .words-section-container {
          width: 100vw;
          display: flex;
          flex-direction: row;
          background-color: white;
          justify-content: space-between;
          padding: 4.5em 2em 4em 5em;
        }

        .words-section-container h2:first-child {
          background-color: skyblue;
          padding: 1em;
          max-width: 35%;
        }

        .words-section-container div:nth-child(2) {
          font-size: 1.5em;
          width: 55%;
          padding: 1em;
          background-color: skyblue;
        }

        .words-section-container ul {
          list-style: none;
          padding: 1em;
          margin: 0;
          font-size: 0.8em;
          font-style: italic;
          opacity: 80%;
        }

        .words-section-container li {
          padding-bottom: 0.25em;
          font-size: 1.25em;
        }

        .words-section-container li::before {
          content: "- ";
        }
      `}</style>
    </>
  );
};

export default WordsSection;
