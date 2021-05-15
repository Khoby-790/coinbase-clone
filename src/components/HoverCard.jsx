import React from "react";

const HoverCard = ({ src, name, slug, gain }) => {
  return (
    <div className="bg-white p-3 my-2 justify-between items-center flex hover:shadow-lg rounded-md">
      <div className="w-auto flex items-center">
        <img src={src} alt="SKALE" className="mr-4 h-12"></img>
        <span className="text-2xl mr-4">{name}</span>
        <span>{slug}</span>
      </div>
      <div className="w-1/3 flex justify-end">
        <span className="font-medium text-green-400 text-xl">
          Earn ${gain} {slug}
        </span>
      </div>
    </div>
  );
};

export default HoverCard;
