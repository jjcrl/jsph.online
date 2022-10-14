const Gallery = ({ items }) => {
  return (
    <section
      data-scroll-section
      className="flex flex-col w-screen h-full bg-stone-100"
    >
      {items.map((item) => (
        <div className="w-full h-min bg-stone-100">{item}</div>
      ))}
    </section>
  );
};

export default Gallery;
