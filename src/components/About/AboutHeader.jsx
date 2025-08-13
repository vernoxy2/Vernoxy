import React from "react";
import HeaderImg from "../../assets/AboutPageImgs/AboutHeader.webp";

const AboutHeader = () => {
  return (
    <section className="px-3">
      <div className="relative">
        <img
          src={HeaderImg}
          alt="About Us Header"
          className="w-full rounded-[56px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-2 justify-center items-center text-white text-center px-4">
          <h1 className="font-black text-3xl sm:text-5xl lg:text-6xl">About Us</h1>
          <p className="text-base sm:text-lg font-extrabold max-w-2xl">
            Fueling Growth with Data-Driven Digital Marketing
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
