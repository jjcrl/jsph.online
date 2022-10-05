import GenerativeArtwork from "./generative-artwork";

const Artwork = () => {
  return (
    <div className="flex flex-row-reverse w-screen h-screen bg-white p-20">
      <div className="w-2/3  m-auto px-3">
        <GenerativeArtwork height={38} border={true} tick={true} />
      </div>

      <div className="w-1/3 m-auto flex flex-col px-5 gap-8 justify-center">
        <h4>Generative Grid Artwork</h4>
        <h7>
          Creative coding to genreate endless version of grid art, with the web
          apps core colours. Design to create a pefect square in the middle
          should the values align.
        </h7>
        <h7>As always full coruce code can be found on my github.</h7>
      </div>
    </div>
  );
};

export default Artwork;
