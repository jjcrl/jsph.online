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
      className={`bg-${background} w-screen h-max flex flex-row justify-between py-20 px-20`}
      data-scroll-section
    >
      <h4 className={`w-1/2 pr-10 text-${font1}`}>{section1}</h4>

      <div className={`flex flex-col w-1/2 text-${font2} pt-5 opacity-80`}>
        <h7 className="pb-5">{section2}</h7>
        <h7 className="pb-5"> {section3}</h7>
        <h7 className="pb-5">{section4} </h7>
      </div>
    </section>
  );
};

export default WordsSection;
