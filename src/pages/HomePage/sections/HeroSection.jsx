import React from "react";
import PhoneSvg from "../../../components/PhoneSvg";

const HeroSection = () => {
  return (
    <div className="h-screen w-full flex flex-row">
      <div className="flex-1 bg-blue-800"></div>
      <div className="flex-1 bg-blue-500 flex justify-center items-center">
          <PhoneSvg />
      </div>
    </div>
  );
};

export default HeroSection;
