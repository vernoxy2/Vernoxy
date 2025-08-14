import React from "react";
import PrimaryHeading from "../PrimaryCompo/PrimaryHeading";
import WeareImg from "../../assets/AboutPageImgs/weareImg.webp";

const WeAre = () => {
  return (
    <section className="py-10 md:py-20 space-y-4 md:space-y-8">
      <PrimaryHeading>
        <span className="font-bold bg-gradient-to-r from-[#1168B5] to-[#4ED5E2] bg-clip-text text-transparent">
          Who
        </span>{" "}
        We Are
      </PrimaryHeading>

      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-y-8">
        {/* Text Section */}
        <div className="flex flex-col gap-4">
          <h1 data-aos="fade-right" className="text-3xl sm:text-4xl lg:text-5xl font-medium">
            <span className="font-black bg-gradient-to-r from-[#1168B5] to-[#4ED5E2] bg-clip-text text-transparent">
              Pioneering the Future
            </span>{" "}
            of Digital Innovation
          </h1>
          <p data-aos="fade-right" className="text-lg leading-snug text-secondary max-w-2xl">
            Founded in 2019, Vernoxy was born from a vision to bridge the gap
            between advanced technology and meaningful business impact. What
            began as a small group of passionate developers has grown into a
            trusted digital agency serving Fortune 500 companies and
            forward-thinking startups. Our founders recognized that businesses
            needed more than just technical execution—they needed strategic
            partners who understand their goals and challenges.
          </p>
          <p data-aos="fade-right" className="text-lg leading-snug text-secondary max-w-2xl">
            Today, Vernoxy stands at the forefront of digital transformation,
            blending human creativity with technological excellence. With a
            commitment to innovation, transparency, and measurable results, we
            help businesses unlock their full potential in the ever-evolving
            digital world.
          </p>
        </div>

        {/* Image Section */}
        <div data-aos="fade" className="flex flex-col gap-4 items-center justify-center">
          <img data-aos="zoom-in" src={WeareImg} alt="" className="mx-auto w-full lg:w-[70%] " />
        </div>
      </div>
    </section>
  );
};

export default WeAre;
