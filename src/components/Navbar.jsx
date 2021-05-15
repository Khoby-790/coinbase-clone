import React from "react";
import CoinbaseLogo from "./Coinbaselogo";

const Navbar = () => {
  return (
    <div className="bg-white flex w-screen absolute flex-row">
      <div className="w-96 p-3">
        <CoinbaseLogo />
      </div>
      <div className="w-auto flex-1"></div>
      <div className="w-96 flex items-center justify-center">
        <button className="border-o outline-none hover:text-blue-700 font-medium p-2">
          Signin
        </button>
        <button className="border-o outline-none hover:bg-blue-700 font-medium p-2 bg-blue-600 text-white rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
