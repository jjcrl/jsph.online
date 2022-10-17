import GenerativeArtwork from "./generative-artwork";

const Artwork = () => {
  return (
    <div className="flex flex-col w-screen h-fit bg-stone-100 p-20">
      <div className="w-3/4  m-auto">
        <GenerativeArtwork height={44} border={true} tick={true} />
      </div>

      <div className="w-full m-auto flex flex-col pl-16 pr-28 gap-8 justify-center align-center text-center py-5">
        <h4 className="pt-10 font-medium text-left px-36">
          Generative Grid Artwork
        </h4>
        <h7 className="m-auto px-36 text-left font-regular">
          Creative coding to genreate endless version of grid art, with the web
          apps core colours. Design to create a pefect square in the middle
          should the values align.As always full coruce code can be found on my
          github.
        </h7>
      </div>
    </div>
  );
};

export default Artwork;
