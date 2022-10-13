const Gallery = ({ items }) => {
  return (
    <section
      data-scroll-section
      className={`{flex w-screen h-max bg-stone-100`}
    >
      {items.map((item) => (
        <div className={`{w-full h-full`}>{item}</div>
      ))}
    </section>
  );
};

export default Gallery;
