const WordsSection = () => {
  return (
    <section
      className="bg-white w-screen h-max flex flex-row justify-between m-1 p-20"
      data-scroll-section
    >
      <h5>
        Lorem ipsum dolor sit amet, consectetur adipiscing.Aliquam neque massa,
        dictum non ex ullamcorper, imperdiet rutrum turpis.
      </h5>

      <div className="flex flex-col w-fit">
        <h6>
          Vestibulum facilisis libero vitae imperdiet vehicula. Donec facilisis
          congue orci ac elementum. Suspendisse rhoncus arcu metus, eget
          faucibus nulla iaculis quis
        </h6>
        <h6>
          Mauris tempus tristique eros, ac facilisis libero varius nec. Proin
          tristique, leo eu gravida dapibus, sem est posuere tellus, quis
          pulvinar diam lectus vel erat. Mauris tristique luctus nunc, in tempor
          nisl.
        </h6>
      </div>
    </section>
  );
};

export default WordsSection;
