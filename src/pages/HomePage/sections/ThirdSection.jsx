import React from "react";

const ThirdSection = () => {
  return (
    <div className="w-full flex py-4 items-center justify-center">
      <div className="w-2/3 flex">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl font-medium">Earn up to $28 worth</h1>
          <h1 className="text-3xl font-medium">of crypto</h1>
          <div className="my-3">
            <p className="font-thin text-lg">
              Discover how specific cryptocurrencies work — and
            </p>
            <p className="font-thin text-lg">
              get a bit of each crypto to try out for yourself.
            </p>
          </div>
          <button className="bg-blue-600 px-3 w-40 text-white py-3 font-bold outline-none focus:outline-none rounded-lg">
            Start earning
          </button>
        </div>
        <div className="flex-1">
          <div className="bg-white p-3 my-2 justify-between flex hover:shadow-md rounded-md">
            <div className="w-auto flex">
              <img
                src="https://static-assets.coinbase.com/earn/campaigns/skale/asset-logo.svg"
                alt="SKALE"
                className="mr-4"
              ></img>
              <span className="text-3xl mr-4">SKALE</span>
              <span>SKL</span>
            </div>
            <div>
              <span className="font-medium text-green-400 text-xl">
                Earn $3 SKL
              </span>
            </div>
          </div>
          <HoverCard
            src={
              "https://static-assets.coinbase.com/earn/campaigns/ampleforth-governance-token/asset-logo.svg"
            }
            name="Ampleforth Governance Token"
            slug="FORTH"
            gain={3}
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

const HoverCard = ({ src, name, slug, gain }) => {
  return (
    <div className="bg-white p-3 my-2 justify-between flex hover:shadow-md rounded-md">
      <div className="w-auto flex">
        <img src={src} alt="SKALE" className="mr-4"></img>
        <span className="text-3xl mr-4">{name}</span>
        <span>{slug}</span>
      </div>
      <div>
        <span className="font-medium text-green-400 text-xl">
          Earn ${gain} {slug}
        </span>
      </div>
    </div>
  );
};
