import React from "react";

const Section = ({ children }) => {
  return (
    <div className="w-full flex py-4 items-center justify-center">
      <div className="w-4/5 flex">{children}</div>
    </div>
  );
};

export default Section;
