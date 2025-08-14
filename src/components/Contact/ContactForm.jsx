import React from "react";
import PrimaryHeading from "../PrimaryCompo/PrimaryHeading";

const ContactForm = () => {
  return (
    <div className="py-10 md:py-20 space-y-4 md:space-y-8 container text-center">
      <PrimaryHeading>Let's contact today</PrimaryHeading>
      
      <p data-aos="fade-up" className="lg:w-2/3 mx-auto md:text-2xl leading-snug tracking-tight">
        Our goal is to help you tap into your true strength, stand tall in any
        situation, and shut the door on self-doubt.
      </p>
      <form
      data-aos="zoom-in"
        action=""
        className="flex flex-col gap-4 w-full placeholder:text-[#38404A] xl:container"
      >
        <div className="flex flex-row gap-4 flex-wrap">
          {/* Name */}
          <div className="p-[2px] rounded-lg bg-gradient-to-t from-[#1168B5] to-[#4ED5E2] flex-1 min-w-[250px]">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg border-none outline-none bg-white"
            />
          </div>

          {/* Email */}
          <div className="p-[2px] rounded-lg bg-gradient-to-t from-[#1168B5] to-[#4ED5E2] flex-1 min-w-[250px]">
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg border-none outline-none bg-white"
            />
          </div>

          {/* Number */}
          <div className="p-[2px] rounded-lg bg-gradient-to-t from-[#1168B5] to-[#4ED5E2] flex-1 min-w-[250px]">
            <input
              type="tel"
              placeholder="Your Number"
              required
              className="w-full p-4 rounded-lg border-none outline-none bg-white"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="p-[2px] rounded-lg bg-gradient-to-t from-[#1168B5] to-[#4ED5E2]">
          <input
            type="text"
            placeholder="Subject"
            required
            className="w-full p-4 rounded-lg border-none outline-none bg-white"
          />
        </div>

        {/* Message */}
        <div className="p-[2px] rounded-lg bg-gradient-to-t from-[#1168B5] to-[#4ED5E2]">
          <textarea
            placeholder="Message"
            required
            rows={5}
            className="w-full p-4 rounded-lg border-none outline-none bg-white"
          ></textarea>
        </div>

        {/* Button Center */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-t from-[#1168B5] to-[#4ED5E2] text-white px-5 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
