const WordsSection = ({ type, section1, section2, section3, section4 }) => {
  return (
    <section
      className="flex flex-col px-5 py-10 bg-stone-100 w-screen h-full sm:py-20 sm:flex-row sm:px-20"
      data-scroll-section
    >
      {type === 1 ? (
        <>
          <h4 className="w-full leading-tight text-pale mix-blend-difference sm:w-1/2 sm:pr-20 sm:pt-5 font-medium">
            {section1}
          </h4>
          <div className="flex flex-col w-full text-pale opacity-80 px-2 py-5 mix-blend-difference sm:w-2/3 sm:pl-20 font-regular">
            <h7 className="pb-3">{section2}</h7>
            <h7 className="pb-7"> {section3}</h7>
            <h7 className="pb-3">{section4} </h7>
          </div>
        </>
      ) : (
        <>
          <h4 className="w-fit leading-tight text-ink font-medium border p-5">
            {section1}
          </h4>
          <div className="flex flex-col font-regular border p-10 text-ink">
            <h7 className="pb-5">{section2}</h7>
            <h7 className="pb-5"> {section3}</h7>
            <h7 className="underline text-boyblue text-2xl">{section4} </h7>
          </div>
        </>
      )}
    </section>
  );
};

export default WordsSection;
