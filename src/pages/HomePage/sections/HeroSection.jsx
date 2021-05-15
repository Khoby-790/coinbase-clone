import React from "react";
import { Link } from "react-router-dom";
import { PhoneSvg, BtcSvg, ArrowSvg } from "../../../components";

const HeroSection = () => {
  return (
    <div className="h-screen w-full flex flex-row">
      <div className="flex-1 flex h-full items-center justify-center bg-blue-800">
        <Link className="flex flex-row">
          <BtcSvg />
          <span className="ml-2 text-blue-700">Jump start your portfolio</span>
          <ArrowSvg />
        </Link>
      </div>
      <div className="flex-1 h-full flex justify-center items-center pt-10">
        <PhoneSvg />
      </div>
    </div>
  );
};

export default HeroSection;
