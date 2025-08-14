import React from "react";
import GoalsBg from "../../assets/AboutPageImgs/GoalsBg.webp";
import VisionImg from "../../assets/AboutPageImgs/VisionImg.webp";
import MissionImg from "../../assets/AboutPageImgs/MissionImg.webp";

const style = {
  backgroundImage: `url(${GoalsBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Goals = () => {
  return (
    <section style={style} className=" py-10 md:py-20 text-center">
      {/* Content */}
      <div className="relative z-10 space-y-6 md:space-y-12">
        {/* Heading */}
        <h1 data-aos="fade-up" className="mx-auto font-medium text-3xl md:text-6xl max-w-4xl text-white">
          <span className="font-black bg-gradient-to-r from-[#1168B5] to-[#4ED5E2] bg-clip-text text-transparent">
            Clarify the company’s
          </span>{" "}
          long <br /> term purpose and goals
        </h1>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 container">
          {/* Vision */}
          <div data-aos="fade-right" className="relative flex flex-col items-center group p-6">
            <img
              src={VisionImg}
              alt="Vernoxy's vision representation"
              className="rounded-lg shadow-lg transition duration-500 group-hover:blur-sm group-hover:scale-105 "
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-y-4 bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg">
              <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl mb-2">
                Our Vision
              </h1>
              <p className="md:text-lg max-w-md">
                Our vision is to lead with innovation, inspire growth, empower
                communities, and set benchmarks for excellence, trust, and
                sustainability.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div data-aos="fade-left" className="relative flex flex-col items-center group p-6">
            <img
              src={MissionImg}
              alt="Vernoxy's mission representation"
              className="rounded-lg shadow-lg transition duration-500 group-hover:blur-sm group-hover:scale-105 "
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-y-4 bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg">
              <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl mb-2">
                Our Mission
              </h1>
              <p className="md:text-lg max-w-md">
                Our mission is to deliver impactful solutions through
                innovation, quality service, and commitment, empowering clients
                and driving sustainable business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
