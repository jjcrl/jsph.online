const WordsSection = ({
  section1,
  section2,
  section3,
  section4,
  sectionclass,
}) => {
  return (
    <section className={sectionclass} data-scroll-section>
      <h4 className={`w-1/2 pr-10 text-pale p-3 mix-blend-difference`}>
        {section1}
      </h4>

      <div
        className={`flex flex-col w-1/2 text-pale opacity-80 px-10 py-5 mix-blend-difference`}
      >
        <h7 className="pb-3">{section2}</h7>
        <h7 className="pb-3"> {section3}</h7>
        <h7 className="pb-3">{section4} </h7>
      </div>
    </section>
  );
};

export default WordsSection;
