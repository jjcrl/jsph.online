import { useState } from "react";
import GenerativeArtwork from "./generative-artwork";
import GalleryGrid from "./ncnews-artwork-gallery";

const Artwork = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-row w-screen h-screen bg-pale py-20 mt-20">
      <div className="w-3/4 py-10 pl-32 pr-10 m-auto">
        <GenerativeArtwork height={35} border={true} />
      </div>

      <div className="w-1/3 m-auto flex flex-col mr-28">
        <h4 className="m-5 tracking-none">Generative Grid Artwork</h4>
        <p className="m-5 leading-normal text-xl text-cod">
          Creative coding to genreate endless version of grid art, with the web
          apps core colours.
          <br />
          <br />
          Design to create a pefect square in the middle should the values
          align.
        </p>
      </div>
    </div>
  );
};

export default Artwork;
