import React from "react";
import heroImg from "../../assets/hero.png";
import arrow from "../../assets/arrow.png";

const HomeHader = () => {
  return (
    <div className="py-10 md:py-20 space-y-4 md:space-y-8 container">
      <div className="text-center text-[25px] lg:text-5xl font-normal leading-tight text-secondary">
        <h1>
          Empowering{" "}
          <span className="font-extrabold bg-[linear-gradient(to_right,_#136DB9_16%,_#55D3E0_100%)] bg-clip-text text-transparent">
            Brands
          </span>
          <span className="block leading-[1.1]">
            Through{" "}
            <span className="font-extrabold bg-[linear-gradient(to_right,_#136DB9_16%,_#55D3E0_100%)] bg-clip-text text-transparent">
              Creative
            </span>{" "}
            Solutions
          </span>
        </h1>
      </div>

      <div className="">
        <h1 className="text-xs lg:text-xl text-center font-normal tracking-wide text-secondary">
          Empowering brands with innovative, data-driven strategies through
          creative solutions, <br />
          insightful analytics, modern design, and professional digital
          workspaces.
        </h1>
      </div>

      <div className=" flex justify-center">
        <div className="relative inline-block">
          <img src={heroImg} alt="" className="w-[80%] mx-auto" />
          <img
            src={arrow}
            alt=""
            className="absolute lg:-top-14 hidden lg:block h-[110px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHader;
