import React from "react";
import PrimaryHeading from "../PrimaryCompo/PrimaryHeading";
import { ChartLine, Medal, SlidersHorizontal, Target } from "lucide-react";

const services = [
  {
    img: <SlidersHorizontal className="text-4xl" />,
    title: "Customized Strategies",
    desc: "We craft data-driven, bespoke solutions tailored to your unique business needs and objectives.",
  },
  {
    img: <ChartLine />,
    title: "Transparent Reporting",
    desc: "Stay informed with clear, concise, and actionable reports that put you in control.",
  },
  {
    img:<Medal />,
    title: "Customized Strategies",
    desc: "Work with a team of industry-certified professionals committed to your growth. ",
  },
  {
    img: <Target />,
    title: "ROI Focused",
    desc: "Maximize your investment with our relentless focus on delivering measurable business results.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-10 md:py-20 space-y-4 md:space-y-8">
      <PrimaryHeading>
        <span className="font-bold bg-gradient-to-r from-[#1168B5] to-[#4ED5E2] bg-clip-text text-transparent">
          Why Choose
        </span>{" "}
        Us
      </PrimaryHeading>
      <div className="container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap- gap-y-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 bg-white justify-center items-center text-center p-4 hover:shadow-lg transition"
          >
            <div className="bg-primary-gradient p-5 rounded-full text-white">{service.img}</div>
            <h3 className="text-2xl font-medium">{service.title}</h3>

            <p className="text-lg leading-snug">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
