const Footer = () => {
  return (
    <>
      <footer
        data-scroll-section
        className="bg-cod m-0	w-screen h-min flex flex-col px-10 py-20 pb-5"
      >
        <div className="flex flex-row justify-between">
          <div className="h-full flex flex-col">
            <h4 className="m-5 text-pale w-2/4">typewritter goes here.</h4>
            <h3 className="underline text-blurple m-5 hover:italic w-min">
              hello@jsph.dev
            </h3>
          </div>

          <div className=" w-1/3 flex flex-row justify-between self-end mr-28  mt-10 mb-auto">
            <ul className="text-ink leading-normal text-3xl text-road font-semibold tracking-loose">
              <li className="font-semibold italic pb-3 text-2xl opacity-50">
                stay social
              </li>
              <li className="underline">twitter</li>
              <li className="underline">github</li>
              <li className="underline">linkedin</li>
            </ul>
            <ul className="text-ink leading-normal text-3xl text-road font-semibold tracking-loose">
              <li className="font-semibold italic pb-3 text-2xl opacity-50">
                say hello
              </li>
              <li className="underline">hello@jsph.dev</li>
              <li className="text-xl">Salford,GB</li>
              <li className="text-xl">53.4875° N</li>
              <li className="text-xl">2.2901° W</li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="list-none m-0 p-0 flex flex-row justify-between px-10 mt-20 text-pale opacity-20">
            <li>copyright 2022</li>
            <li>Designed by Joseph Carroll</li>
            <li>jsph.dev</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
