import React from "react";
import { Section } from "../../../components";

const CryptocurrencyProfileSection = () => {
  return (
    <Section type="col">
      <div className="w-full my-4 flex flex-col items-center">
        <h1 className="text-4xl font-medium">
          Create your cryptocurrency portfolio today
        </h1>
        <span className="text-gray-400 mt-4 text-lg">
          Coinbase has a variety of features that make it the best place to
          start trading
        </span>
      </div>
      <div className="w-full flex"></div>
    </Section>
  );
};

export default CryptocurrencyProfileSection;
