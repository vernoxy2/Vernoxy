import React from "react";

const PrimaryHeading = ({ children, className = '' }) => {
  return (
    <div className="py-10 ">
      <div className="container mx-auto">
        <h1 className={`text-center font-medium text-3xl md:text-6xl text-secondary ${className}`}>
          {children}
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-[#1168B5] to-[#4ED5E2] rounded mx-auto mt-3"></div>
      </div>
    </div>
  );
};

export default PrimaryHeading;
