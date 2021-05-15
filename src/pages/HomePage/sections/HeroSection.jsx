import React from "react";
import { Link } from "react-router-dom";
import { PhoneSvg, BtcSvg, ArrowSvg } from "../../../components";

const HeroSection = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-2/3 flex   h-full">
        <div className="flex-1 w-full  flex flex-col h-full justify-center">
          <Link className="flex flex-row items-center">
            <BtcSvg />
            <span className="ml-2 text-blue-700 font-semibold text-lg mr-2">
              Jump start your portfolio
            </span>
            <ArrowSvg />
          </Link>
          <div className="">
            <h1 className="text-7xl my-2 font-bold">Jump start</h1>
            <h1 className="text-7xl  my-2 font-bold">your crypto</h1>
            <h1 className="text-7xl  my-2 font-bold">portfolio</h1>
          </div>
          <div className="my-4">
            <p className="font-medium text-xl">
              Coinbase is the easiest place to buy and sell
            </p>
            <p className="font-medium text-xl">
              cryptocurrency. Sign up and get started today.
            </p>
          </div>
          <div className="flex flex-row mt-4 items-stretch w-full">
            <input
              placeholder="Email address"
              className="p-4 border border-gray-300 rounded-lg outline-none focus:outline-none mr-2 w-2/3"
              type="email"
            />
            <button className="bg-blue-600 text-white w-1/3 outline-none focus:outline-none rounded-lg font-bold">
              Get Started
            </button>
          </div>
          <div>
            <span className="text-blue-600 text-xs underline">
              * Terms apply
            </span>
          </div>
        </div>
        <div className="flex-1 h-full flex justify-center items-center pt-10">
          <PhoneSvg />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
