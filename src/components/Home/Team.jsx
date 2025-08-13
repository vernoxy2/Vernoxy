import React from "react";
import PrimaryHeading from "../PrimaryCompo/PrimaryHeading";
import { SlidersHorizontal } from "lucide-react";

const services = [
  {
    img: <SlidersHorizontal className="text-4xl" />,
    title: "John Doe",
    desc: "John is our SEO specialist with a keen eye for optimizing websites and driving organic traffic. With years of experience, he ensures our clients rank high on search engines.",
  },
  {
    img: <SlidersHorizontal className="text-4xl" />,
    title: "John Doe",
    desc: "John is our SEO specialist with a keen eye for optimizing websites and driving organic traffic. With years of experience, he ensures our clients rank high on search engines.",
  },
  {
    img: <SlidersHorizontal className="text-4xl" />,
    title: "John Doe",
    desc: "John is our SEO specialist with a keen eye for optimizing websites and driving organic traffic. With years of experience, he ensures our clients rank high on search engines.",
  },
];

const Team = () => {
  return (
    <section className="py-10 md:py-20 space-y-4 md:space-y-8 bg-black">
      <PrimaryHeading className="text-white">
        <span className="font-bold bg-gradient-to-r from-[#1168B5] to-[#4ED5E2] bg-clip-text text-transparent">
          Meet{" "}
        </span>
        Our Team
      </PrimaryHeading>
      <p className="lg:w-1/2 mx-auto md:text-2xl leading-snug tracking-tight text-white text-center 2xl:px-5">
        Get to know the talented individuals who drive our agency forward. Learn about our team's expertise, passion, and commitment to delivering exceptional results for our clients.
      </p>{" "}
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 text-white bg-black justify-center items-start p-5 hover:shadow-lg transition shadow-xl rounded-2xl border border-gray-700"
          >
            <div className="h-[300px] w-full bg-gray-500 rounded-2xl"></div>
            <h3 className="text-2xl font-medium">{service.title}</h3>

            <p className="text-lg leading-snug">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
