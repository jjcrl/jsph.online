import ColourPalette from "./colour-pallete";
import GenerativeArtwork from "./generative-artwork";

const Artwork = () => {
  return (
    <div className="flex flex-col gap-20 bg-gray-50">
      <div className="m-20">
        <ColourPalette
          colours={["#F5F5F5", "#121212", "#412CFF", "#FE4B72"]}
          columns={4}
          rows={1}
          width={200}
        />
      </div>
      <div className="flex flex-row mx-28 w-fit m-auto gap-10 ">
        <div className="w-2/3">
          <GenerativeArtwork height={35} border={true} />
        </div>
        <div className="w-1/3 m-auto">
          <h4 className="m-5 tracking-none">Generative Grid Artwork</h4>
          <p className="m-5 leading-normal text-xl text-cod">
            Creative coding to genreate endless version of grid art, with the
            web apps core colours. Design to create a pefect square in the
            middle should the values align.
          </p>
        </div>
      </div>
      <div className="grid grid-rows-3 grid-cols-4 h-full w-full px-20 gap-5">
        <GenerativeArtwork height={14} border={false} />
        <GenerativeArtwork height={14} border={false} />
        <GenerativeArtwork height={14} border={false} />
        <GenerativeArtwork height={14} border={false} />
        <GenerativeArtwork height={14} border={false} />
        <GenerativeArtwork height={14} border={false} />
        <GenerativeArtwork height={14} border={false} />
        <GenerativeArtwork height={14} border={false} />
        <GenerativeArtwork height={14} border={false} />
        <GenerativeArtwork height={14} border={false} />
        <GenerativeArtwork height={14} border={false} />
        <GenerativeArtwork height={14} border={false} />
      </div>
    </div>
  );
};

export default Artwork;
