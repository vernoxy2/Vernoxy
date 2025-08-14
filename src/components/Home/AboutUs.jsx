import React from "react";
import About1 from "../../assets/HomePageImgs/About1.webp";
import About2 from "../../assets/HomePageImgs/About2.webp";
import PrimaryHeading from "../PrimaryCompo/PrimaryHeading";

const AboutUs = () => {
  return (
    <section className="py-12 overflow-x-hidden">
      <PrimaryHeading>About Us</PrimaryHeading>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-3 gap-y-12">
        <div className="flex flex-col gap-6 md:gap-10 items-start justify-start text-secondary">
          <h1 data-aos="fade-right" className="text-2xl md:text-5xl font-medium">
            <span className="font-black bg-gradient-to-r from-[#1168B5] to-[#4ED5E2] bg-clip-text text-transparent">
              Designing
            </span>{" "}
            Digital Experiences That Inspire
          </h1>

          <p data-aos="fade-right" className="md:text-lg leading-snug tracking-tight">
            At Vernoxy, we specialize in empowering brands through innovative,
            data-driven, and creative solutions. Our mission is to transform
            ideas into impactful strategies that drive growth, engagement, and
            long-term success. With a focus on design, analytics, and modern
            digital tools, we help businesses stand out in competitive markets.
          </p>
          <p data-aos="fade-right" className="md:text-lg leading-snug tracking-tight">
            Our team of experts blends creativity with cutting-edge technology
            to deliver customized branding, marketing, and business solutions.
            Whether you're a startup or an established brand, we’re here to turn
            your vision into measurable results.
          </p>
        </div>
        {/* <AboutUsImage /> */}
        <div data-aos="fade-left" className="mx-auto">
          <div className="w-[80%] ml-auto">
            <img src={About1} alt="" className="rounded-2xl" />
          </div>
          <div className="w-[55%] ml-0 -translate-y-24">
            <img src={About2} alt="" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
