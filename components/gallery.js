const Gallery = ({ direction, items, bg, height }) => {
  return (
    <section
      data-scroll-section
      className={`{flex flex-${direction} w-screen bg-${bg} h-max `}
    >
      {items.map((item) => (
        <div className={`{w-full h-full`}>{item}</div>
      ))}
    </section>
  );
};

export default Gallery;
