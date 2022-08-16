const Hero = () => {
  return (
    <>
      <section data-scroll-section>
        <h1>jsph.dev</h1>
        <div className="flex-row-space-between">
          <span>
            Manchester <u>{new Date().toLocaleTimeString()}</u>
          </span>
          <u>Hello There !!</u>
        </div>
      </section>

      <style jsx>{`
        section {
          background-color: red;
          width: 100vw;
          height: 95vh;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
        }

        .flex-row-space-between {
          display: flex;
          flex-direction: row;
          padding: 2em 4em;
          justify-content: space-between;
        }

        span {
          font-size: 1.2em;
          font-weight: 600;
        }

        u {
          text-decoration: none;
          font-weight: 400;
        }
      `}</style>
    </>
  );
};

export default Hero;
