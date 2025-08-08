import React from "react";
import PrimaryHeading from "../PrimaryCompo/PrimaryHeading";
import ServicesImage from "../../assets/HomePageImgs/ServicesImage.webp";
import { ArrowRight } from "lucide-react";

const services = [
  "Ui/UX Designer",
  "Web Development",
  "Graphics Designer",
  "Video Editing",
];

const Services = () => {
  return (
    <section className="py-12 bg-[#f2f8ff]">
      <PrimaryHeading>Services</PrimaryHeading>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        {/* Left Section */}
        <div className="flex flex-col gap-6 md:gap-10 text-secondary">
          <h1 className="text-3xl md:text-5xl font-medium text-center lg:text-start">
            <span className="font-black bg-gradient-to-r from-[#1168B5] to-[#4ED5E2] bg-clip-text text-transparent">
              Explore
            </span>{" "}
            Our Services
          </h1>

          <p className="md:text-lg leading-snug text-gray-700 text-center lg:text-start">
            We design clean, user-friendly digital experiences that blend
            beauty, usability, and strategic functionality.
          </p>

          <div className="mt-4 md:mt-6 flex flex-col gap-4 w-full max-w-lg mx-auto lg:mx-0">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white shadow-md rounded-full px-6 py-4 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <span className="font-black text-[#06213C] md:text-2xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-800 font-medium md:text-xl">{service}</span>
                </div>
                <ArrowRight className="text-gray-600 md:text-4xl"  />
                
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full flex justify-center">
          <img
            src={ServicesImage}
            alt="Services"
            className="w-[90%] max-w-md rounded-2xl object-cover"
          />
          <button className="absolute bottom-5 bg-white/10 border-secondary border px-6 py-2 rounded-full shadow-md text-gray-800 font-medium flex items-center gap-2 hover:bg-gray-100 transition md:text-2xl">
            See How We Work <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
