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
          <div className="bg-white p-3 hover:shadow-md">
            <div className="w-auto">
              <span className="text-2xl mr-4">SKALE</span>
              <span>SKL</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
