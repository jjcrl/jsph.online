const Hero = () => {
  return (
    <section
      data-scroll-section
      className="flex flex-col bg-gray-50 w-screen h-screen p-0 m-0 -mb-5"
    >
      <h1 className="text-cod tracking-widest m-auto text-ink pt-10">
        jsph.dev
      </h1>
      <div className="flex flex-row justify-end p-10">
        <h6 className="text-cod m-auto mb-5">
          Salford,GB{" "}
          <u className="text-ink">{new Date().toLocaleTimeString()}</u>
        </h6>
      </div>
    </section>
  );
};

export default Hero;
