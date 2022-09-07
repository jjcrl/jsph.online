import GenerativeArtwork from "../components/generative-artwork";

const NcNewsShowcase = () => {
  return (
    <div className="bg-gray-50 h-full w-full overflow-hidden px-5 columns-3 text-white gap-5">
      <div className="w-52 h-fit bg-cod flex flex-col px-5 pt-5 py-4 rounded-xl mb-5">
        <GenerativeArtwork height={8} border={false} />
        <h7 className="pt-3  opacity-80">coding</h7>
        <h6 className="underline">Making sense of Redux.</h6>
        <h7 className="pt-2 italic opacity-50">@grumpy19</h7>
      </div>
      <div className="w-52 h-fit bg-cod flex flex-col px-5 pt-5 py-4 rounded-xl mb-5">
        <GenerativeArtwork height={8} border={false} />
        <h7 className="pt-3  opacity-80">football</h7>
        <h6 className="underline leading-tight">
          Game of talents: management lessons from top coaches.
        </h6>
        <h7 className="pt-2 italic opacity-50">@jessjelly</h7>
      </div>
      <div className="w-52 h-fit bg-cod flex flex-col px-5 pt-5 py-4 rounded-xl mb-5">
        <GenerativeArtwork height={8} border={false} />
        <h7 className="pt-3 opacity-80">coding</h7>
        <h6 className="underline leading-tight">How cooking changed us.</h6>
        <h7 className="pt-2 italic opacity-50">@weegembump</h7>
      </div>
      <div className="w-52 h-fit bg-cod flex flex-col px-5 pt-5 py-4 rounded-xl mb-5">
        <GenerativeArtwork height={8} border={false} />
        <h7 className="pt-3  opacity-80">coding</h7>
        <h6 className="underline leading-tight">Making Sense Of Redux.</h6>
        <h7 className="pt-2 italic opacity-50">@weegembump</h7>
      </div>{" "}
      <div className="w-52 h-fit bg-cod flex flex-col px-5 pt-5 py-4 rounded-xl mb-5">
        <GenerativeArtwork height={8} border={false} />
        <h7 className="pt-3  opacity-80">coding</h7>
        <h6 className="underline leading-tight">
          The battle for Node.js security has only begun.
        </h6>
        <h7 className="pt-2 italic opacity-50">@weegembump</h7>
      </div>{" "}
      <div className="w-52 h-fit bg-cod flex flex-col px-5 pt-5 py-4 rounded-xl mb-5">
        <GenerativeArtwork height={8} border={false} />
        <h7 className="pt-3  opacity-80">football</h7>
        <h6 className="underline leading-tight">Sunday league football.</h6>
        <h7 className="pt-2 italic opacity-50">@tickle122</h7>
      </div>
      <div className="w-52 h-fit bg-cod flex flex-col px-5 pt-5 py-4 rounded-xl mb-5">
        <GenerativeArtwork height={8} border={false} />
        <h7 className="pt-3  opacity-80">coding</h7>
        <h6 className="underline leading-tight">
          Designing better Javascript API's.
        </h6>
        <h7 className="pt-2 italic opacity-50">@tickle122</h7>
      </div>{" "}
      <div className="w-52 h-fit bg-cod flex flex-col px-5 pt-5 py-4 rounded-xl mb-5">
        <GenerativeArtwork height={8} border={false} />
        <h7 className="pt-3  opacity-80">cooking</h7>
        <h6 className="underline leading-tight">The vegan carnivore.</h6>
        <h7 className="pt-2 italic opacity-50">@coolmjessy</h7>
      </div>{" "}
      <div className="w-52 h-fit bg-cod flex flex-col px-5 pt-5 py-4 rounded-xl mb-5">
        <GenerativeArtwork height={8} border={false} />
        <h7 className="pt-3  opacity-80">football</h7>
        <h6 className="underline leading-tight">The history of football.</h6>
        <h7 className="pt-2 italic opacity-50">@jessjelly</h7>
      </div>
      <style jsx>{`
        #front {
          font-family: system-ui;
        }
      `}</style>
    </div>
  );
};

export default NcNewsShowcase;
