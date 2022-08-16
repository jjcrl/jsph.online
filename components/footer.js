const Footer = () => {
  return (
    <>
      <footer
        data-scroll-section
        className="bg-pinkflame	w-screen h-min flex flex-row justify-between p-7 m-0 pt-20"
      >
        <section>
          <ul className="list-none p-0 m-0 leading-8">
            <li>Salford,GB</li>
            <li>53.4875° N</li>
            <li>2.2901° W</li>
          </ul>
        </section>
        <section>
          <p>sticker</p>
        </section>
        <section>
          <ul className="list-none p-0 m-0 leading-8 text-right">
            <li>github</li>
            <li>linkedin</li>
            <li>hello@jsph.dev</li>
          </ul>
        </section>
      </footer>

      <style jsx>{``}</style>
    </>
  );
};

export default Footer;
