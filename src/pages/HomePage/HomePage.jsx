import React, { Fragment } from "react";
import HeroSection from "./sections/HeroSection";
import TableRatingSection from "./sections/TableRatingSection";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <TableRatingSection />
    </Fragment>
  );
};

export default HomePage;
