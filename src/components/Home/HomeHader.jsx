import React from "react";
import heroImg from "../../assets/hero.png";
import arrow from "../../assets/arrow.png";

const HomeHader = () => {
  return (
    <div>
      <div className="text-center text-[25px] lg:text-6xl font-normal leading-tight text-secondary">
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

      <div className="mt-5 lg:mt-10 w-full">
        <h1 className="text-xs lg:text-2xl text-center font-normal tracking-wide text-secondary">
          Empowering brands with innovative, data-driven strategies through
          creative solutions, <br />
          insightful analytics, modern design, and professional digital
          workspaces.
        </h1>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="relative inline-block">
          <img src={heroImg} alt="" className="w-[80%] mx-auto" />
          <img
            src={arrow}
            alt=""
            className="absolute lg:-top-14  hidden lg:block h-[110px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHader;
