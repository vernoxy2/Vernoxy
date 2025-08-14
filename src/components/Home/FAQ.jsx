import React from "react";
import PrimaryHeading from "../PrimaryCompo/PrimaryHeading";
import FAQImg from "../../assets/HomePageImgs/FAQImg.webp";
import { Plus } from "lucide-react";

const data = [
  "What types of businesses do you work with?",
  "Do you offer custom digital marketing packages?",
  "What’s the difference between SEO and PPC?",
];

const FAQ = () => {
  return (
    <section className="py-10">
      <PrimaryHeading className="ml-auto">
        <span className="font-bold bg-gradient-to-r from-[#1168B5] to-[#4ED5E2] bg-clip-text text-transparent">
          FAQ
        </span>
      </PrimaryHeading>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-y-10">
        {/* Right Section */}
        <div  className="flex flex-col gap-8 text-secondary  justify-center">
          <h1 data-aos="fade-right" className="text-5xl font-medium">Frequently Asked Questions</h1>
          <p data-aos="fade-right" className="text-2xl leading-snug">
            Find quick answers to common questions about our digital marketing
            website UI design, features, customization, responsiveness, and
            more.
          </p>
          {/* General Questions */}
          <div  className="flex flex-col gap-4">
            <h1 data-aos="fade-right" className="text-3xl font-bold">General Questions</h1>
            <div className="mt-4 md:mt-6 flex flex-col gap-4">
              {data.map((service, index) => (
                <div
                  key={index}
                  data-aos="fade-right" data-aos-delay={index * 200}
                  className="flex justify-between items-center gap-x-12 bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition"
                >
                  <div className="flex items-center ">
                    <span className="text-gray-800 font-medium md:text-xl">
                      {service}
                    </span>
                  </div>
                  <Plus className="text-gray-600 md:text-4xl" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Left Section */}
        <div data-aos="zoom-in">
          <img src={FAQImg} alt="" className="h-[95%] mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
