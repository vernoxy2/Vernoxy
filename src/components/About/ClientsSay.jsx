import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import PrimaryHeading from "../PrimaryCompo/PrimaryHeading";
import Sarah from "../../assets/AboutPageImgs/Sarah.png";
import David from "../../assets/AboutPageImgs/David.png";
import Emily from "../../assets/AboutPageImgs/Emily.png";

const ClintData = [
  {
    id: 1,
    rate: 4,
    name: "Sarah Johnson",
    post: "CEO, TechStart Inc.",
    img: Sarah,
    message:
      "Working with this team transformed our business — their precision and dedication went beyond our expectations.",
  },
  {
    id: 2,
    rate: 5,
    name: "David Park",
    post: "CTO, InnovateLab",
    img: David,
    message:
      "Expert execution, exceeded all expectations brilliantly.",
  },
  {
    id: 3,
    rate: 4,
    name: "Emily Rodriguez",
    post: "Marketing Director, GrowthCo",
    img: Emily,
    message:
      "Flawless process, outstanding results beyond expectations.",
  },
];

const ClientsSay = () => {
  return (
    <section className="py-10 md:py-20 space-y-4 md:space-y-8">
      <PrimaryHeading>What Our Clients Say</PrimaryHeading>
      <div className="container grid grid-cols-1  xl:grid-cols-3 gap-6 gap-y-16">
        {ClintData.map((client) => (
          <div
            key={client.id}
            data-aos="zoom-in" data-aos-delay={client.id * 200}
            className="flex flex-row items-center bg-gredient-to-r from-[#1168B5] to-[#4ED5E2] bg-clip-border p-3 hover:scale-105 duration-300 rounded-lg hover:shadow-lg transition border "
          >
            {/* Left Side - Text */}
            <div className="flex-1 flex flex-col justify-center gap-0.5 text-left font-medium">
              {/* Rating */}
              <div className="flex text-yellow-500">
                {Array.from({ length: 5 }).map((_, index) =>
                  index < client.rate ? (
                    <FaStar key={index} />
                  ) : (
                    <FaRegStar key={index} />
                  )
                )}
              </div>
              {/* Name */}
              <h3 className="md:text-2xl font-black">{client.name}</h3>
              {/* Post */}
              <p className="text-gray-500 text-sm sm:text-lg">{client.post}</p>
              {/* Message */}
              <p className="text-sm sm:text-lg leading-snug">{client.message}</p>
            </div>

            {/* Right Side - Image */}
            <div className="-mb-4 -mt-16 -me-4 flex-shrink-0">
              <img
                src={client.img}
                alt={`${client.name}'s profile`}
                className=""
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSay;
