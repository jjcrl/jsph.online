const Footer = () => {
  return (
    <>
      <footer
        data-scroll-section
        className="bg-ink	w-screen h-min flex flex-row justify-between p-7 m-0 pt-20"
      >
        <div>
          <ul className="list-none p-0 m-0 text-pale">
            <li>Salford,GB</li>
            <li>53.4875° N</li>
            <li>2.2901° W</li>
          </ul>
        </div>
        <div>
          <p>sticker</p>
        </div>
        <div>
          <ul className="list-none p-0 m-0 leading-8 text-right text-pale">
            <li>github</li>
            <li>linkedin</li>
            <li>hello@jsph.dev</li>
          </ul>
        </div>
      </footer>

      <style jsx>{``}</style>
    </>
  );
};

export default Footer;
