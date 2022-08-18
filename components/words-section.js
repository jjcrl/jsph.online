const WordsSection = ({
  section1,
  section2,
  section3,
  section4,
  background,
  font1,
  font2,
}) => {
  return (
    <section
      className={`bg-${background} w-screen h-max flex flex-row justify-between  py-20 px-20`}
      data-scroll-section
    >
      <h4 className={`w-1/2 pr-20 text-${font1} pr-40 my-5`}>{section1}</h4>

      <div className={`flex flex-col w-1/2 pl-20 text-${font2}`}>
        <h5>{section2}</h5>
        <br />
        <h6>{section3}</h6>
        <h6>{section4} </h6>
      </div>
    </section>
  );
};

export default WordsSection;
