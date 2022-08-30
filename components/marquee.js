const Marquee = ({ bg, text, items }) => {
  return (
    <section
      data-scroll-section
      className={`w-screen h-full bg-${bg} text-${text}`}
    >
      <div className="relative flex overflow-x-hidden">
        <div className="py-5 animate-marquee whitespace-nowrap">
          {items.map((item) => (
            <span className="mx-10 text-6xl">{item}</span>
          ))}
        </div>

        <div className="absolute top-0 py-7 animate-marquee2 whitespace-nowrap">
          {items.map((item) => (
            <span className="mx-10 text-6xl">{item}</span>
          ))}
        </div>
      </div>{" "}
    </section>
  );
};

export default Marquee;
