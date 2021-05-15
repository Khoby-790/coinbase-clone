import React from "react";
import { Link } from "react-router-dom";
import { PhoneSvg, BtcSvg } from "../../../components";

const HeroSection = () => {
  return (
    <div className="h-screen w-full flex flex-row">
      <div className="flex-1 flex h-full items-center justify-center bg-blue-800">
        <Link className="flex flex-row">
          <BtcSvg />
        </Link>
      </div>
      <div className="flex-1 h-full flex justify-center items-center pt-10">
        <PhoneSvg />
      </div>
    </div>
  );
};

export default HeroSection;
