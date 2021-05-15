import React from "react";

const Section = ({ children, type = "row" }) => {
  return (
    <div className="w-full flex py-4 items-center justify-center">
      <div className={`w-4/5 flex flex-${type}`}>{children}</div>
    </div>
  );
};

export default Section;
