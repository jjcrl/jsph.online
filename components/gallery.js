const Gallery = ({ items }) => {
  return (
    <section data-scroll-section className={`{flex w-screen h-max `}>
      {items.map((item) => (
        <div className={`{w-full h-full`}>{item}</div>
      ))}
    </section>
  );
};

export default Gallery;
