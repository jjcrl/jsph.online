const Hero = () => {
  return (
    <section
      data-scroll-section
      className="flex flex-col  bg-ink w-screen h-screen p-0 m-0"
    >
      <h1 className="text-pinkflame tracking-widest italic underline">
        jsph.dev
      </h1>
      <div className="flex flex-row justify-between	pl-10 pr-10 pb-10">
        <h6>
          Manchester <u>{new Date().toLocaleTimeString()}</u>
        </h6>
      </div>
    </section>
  );
};

export default Hero;
