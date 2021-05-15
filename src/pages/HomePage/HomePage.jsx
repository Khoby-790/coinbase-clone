import React, { Fragment } from "react";
import CryptocurrencyProfileSection from "./sections/CryptocurrencyProfileSection";
import HeroSection from "./sections/HeroSection";
import TableRatingSection from "./sections/TableRatingSection";
import ThirdSection from "./sections/ThirdSection";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <TableRatingSection />
      <ThirdSection />
      <CryptocurrencyProfileSection />
    </Fragment>
  );
};

export default HomePage;
