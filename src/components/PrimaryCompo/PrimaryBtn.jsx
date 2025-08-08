import React from "react";

const PrimaryBtn = ({ children, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      className={` border-2 border-secondary text-secondary rounded-xl px-6 py-2 text-2xl font-bold flex items-center gap-2 transition duration-300 hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
