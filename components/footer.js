const Footer = () => {
  return (
    <>
      <footer data-scroll-section className="footer-container">
        <section>
          <ul>
            <li>Salford,GB</li>
            <li>53.4875° N</li>
            <li>2.2901° W</li>
          </ul>
        </section>
        <section>
          <p>sticker</p>
        </section>
        <section>
          <ul>
            <li>github</li>
            <li>linkedin</li>
            <li>hello@jsph.dev</li>
          </ul>
        </section>
      </footer>

      <style jsx>{`
        .footer-container {
          width: 100vw;
          height: min-content;
          background-color: olive;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 2em 5em 3em 2em;
        }

        .footer-container ul {
          list-style: none;
          padding: 0;
          margin: 0;
          line-height: 2.5em;
        }

        .footer-container li {
          font-size: 2em;
          letter-spacing: 3px;
          font-weight: 500;
          font-style: italix;
        }

        .footer-container section:last-child {
          text-align: right !important;
        }
      `}</style>
    </>
  );
};

export default Footer;
