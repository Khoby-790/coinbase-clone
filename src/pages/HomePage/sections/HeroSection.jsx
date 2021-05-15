import React from "react";
import { Link } from "react-router-dom";
import { PhoneSvg, BtcSvg, ArrowSvg } from "../../../components";

const HeroSection = () => {
  return (
    <div className="h-screen w-full flex flex-row">
      <div className="flex-1 flex flex-col h-full pt-11 justify-center px-auto">
        <Link className="flex flex-row items-center">
          <BtcSvg />
          <span className="ml-2 text-blue-700 font-semibold text-lg mr-2">
            Jump start your portfolio
          </span>
          <ArrowSvg />
        </Link>
        <div className="">
          <h1 className="text-6xl font-bold">Jump start</h1>
          <h1 className="text-6xl font-bold">your crypto</h1>
          <h1 className="text-6xl font-bold">portfolio</h1>
        </div>
      </div>
      <div className="flex-1 h-full flex justify-center items-center pt-10">
        <PhoneSvg />
      </div>
    </div>
  );
};

export default HeroSection;
