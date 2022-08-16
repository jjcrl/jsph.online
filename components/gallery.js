const Gallery = ({ direction, items, bg, height }) => {
  return (
    <section
      data-scroll-section
      className={`{flex flex-${direction} w-screen bg-white h-max `}
    >
      {items.map((item) => (
        <div className={`{w-full h-96 bg-black; m-1`}></div>
      ))}
    </section>
  );
};

export default Gallery;
