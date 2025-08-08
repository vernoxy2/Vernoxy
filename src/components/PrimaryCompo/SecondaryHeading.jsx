import React from "react";

const SecondaryHeading = ({ children, className = '' }) => {
  return (
    <div className="">
      <div className=" ">
        <h1 className={`text-start font-medium text-3xl md:text-6xl text-secondary ${className}`}>
          {children}
        </h1>
        {/* <div className="h-1 w-32 bg-gradient-to-r from-[#1168B5] to-[#4ED5E2] rounded mx-auto mt-3"></div> */}
      </div>
    </div>
  );
};

export default SecondaryHeading;
