const ShowCase = ({ works }) => {
  return (
    <>
      <section data-scroll-section id="target" data-scroll-id="target">
        {/* <div id="target" data-scroll-id="target"></div> */}
        <div
          className="words"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#target"
        >
          <div className="words-container">
            <p>tags</p>
            <p>title</p>
            <p>words</p>
            <p>link</p>
          </div>
        </div>

        <div className="images" data-scroll>
          <div className="image-container" data-scroll-id="image0">
            <p>1</p>
          </div>
          <div className="image-container" data-scroll-id="image1">
            <p>2</p>
          </div>
          <div className="image-container" data-scroll-id="image3">
            <p>3</p>
          </div>
        </div>
      </section>

      <style jsx>
        {`
          section {
            display: flex;
            postion: relative;
            justify-items: flex-end;
          }

          .words {
            background-color: goldenrod;
            flex: 1;
            height: 100vh;
            border: solid 1px red;
          }

          .images {
            flex: 1;
            background-color: peachpuff;
          }

          .image-container {
            min-height: 100vh;
            min-width: 50vw;
          }

          .images p {
            height: 100%;
            width: 100%;
            object-fit: contain;
          }
        `}
      </style>
    </>
  );
};

export default ShowCase;
