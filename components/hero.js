const Hero = () => {
  return (
    <section
      data-scroll-section
      className="flex flex-col  bg-gray-50 w-screen h-screen p-0 m-0"
    >
      <h1 className="text-ink tracking-widest   m-auto text-ink">jsph.dev</h1>
      <div className="flex flex-row justify-end p-10">
        <h6 className="text-ink m-auto">
          Salford,GB{" "}
          <u className="text-pinkflame">{new Date().toLocaleTimeString()}</u>
        </h6>
      </div>
    </section>
  );
};

export default Hero;
