const Topper = () => {
  return (
    <>
      <section data-scroll-section>
        <div className="topper-container">
          <h3>
            {" "}
            Cras felis sem, sagittis a porttitor quis, semper vel ipsum. Nullam
            eget libero convallis, ullamcorper justo non, hendrerit leo.{" "}
          </h3>
          <h4>
            {" "}
            Proin facilisis vestibulum purus, vel dignissim tortor ultricies
            eget. Aliquam volutpat augue eget tristique semper.
          </h4>
        </div>
      </section>

      <style jsx>
        {`
          .topper-container {
            width: 100vw;
            height: 90vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }
        `}
      </style>
    </>
  );
};

export default Topper;
