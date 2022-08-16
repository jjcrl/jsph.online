const Gallery = ({ works }) => {
  return (
    <>
      <section data-scroll-section>
        <div className="work-item-container">
          <p>1</p>
        </div>
        <div className="work-item-container">
          <p>2</p>
        </div>
        <div className="work-item-container">
          <p>3</p>
        </div>
      </section>

      <style jsx>{`
        section {
          width: 100vw;
          display: flex;
          flex-direction: column;
        }

        .work-item-container {
          background-color: black;
          margin: 1em;
          height: 90vh;
        }

        .work-item-container p {
          color: white;
        }
      `}</style>
    </>
  );
};

export default Gallery;
