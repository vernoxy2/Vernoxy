import React from "react";
import PrimaryHeading from "../PrimaryCompo/PrimaryHeading";
import Contact from "../../assets/HomePageImgs/Contact.webp";
import SecondaryHeading from "../PrimaryCompo/SecondaryHeading";
import PrimaryBtn from "../PrimaryCompo/PrimaryBtn";

const GetaQuote = () => {
  return (
    <section className="py-10">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-y-20">
        <div className="flex flex-col gap-y-12">
          <SecondaryHeading>
            <span className="font-black bg-gradient-to-tr from-[#1168B5] to-[#4ED5E2] bg-clip-text text-transparent">
              Contact
            </span>{" "}
            Our Team
          </SecondaryHeading>
          <h1 className="text-2xl md:text-4xl font-black" >Break the Algorithm – Let’s Talk Strategy. Get a Quote.</h1>
          <PrimaryBtn className="w-48">Get a Quote</PrimaryBtn>
        </div>
        <div>
          <img src={Contact} alt="" />
        </div>
      </div>
    </section>
  );
};

export default GetaQuote;
