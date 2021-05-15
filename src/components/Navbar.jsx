import React from "react";
import CoinbaseLogo from "./Coinbaselogo";

const Navbar = () => {
  return (
    <div className="bg-white flex flex-row">
      <div className="w-96 p-3">
        <CoinbaseLogo />
      </div>
      <div className="w-auto flex-1"></div>
      <div className="w-96">
          <button className="border-o outline-none">Signin</button>
      </div>
    </div>
  );
};

export default Navbar;
