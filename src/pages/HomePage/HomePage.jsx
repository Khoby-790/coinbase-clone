import React, { Fragment } from "react";
import HeroSection from "./sections/HeroSection";
import TableRatingSection from "./sections/TableRatingSection";
import ThirdSection from "./sections/ThirdSection";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <TableRatingSection />
      <ThirdSection />
    </Fragment>
  );
};

export default HomePage;
