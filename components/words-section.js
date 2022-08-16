const WordsSection = () => {
  return (
    <section
      className="bg-ink w-screen h-max flex flex-row justify-between m-0 py-40 px-20 text-white"
      data-scroll-section
    >
      <h5 className="w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing.Aliquam neque massa,
        dictum non ex ullamcorper, imperdiet rutrum turpis.
      </h5>

      <div className="flex flex-col w-max">
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
