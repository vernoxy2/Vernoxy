import React from "react";
import TogetherImg from "../../assets/ContactPageImgs/Together.webp";
import PrimaryHeading from "../PrimaryCompo/PrimaryHeading";
import { MdOutlineAddIcCall, MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    text: (
      <>
        vernoxym@gmail.com <br /> Any quires? Mail Now.
      </>
    ),
    Link: "mailto:vernoxym@gmail.com",
  },
  {
    id: 2,
    icon: <FaMapMarkerAlt />,
    title: "Address",
    text: "513,Kalaji Business Center, Dharampur Chokdi, NH8, Valsad, Gujarat 396001",
    Link: "https://maps.app.goo.gl/UzKt8aLsm4qyrSsz6",
  },
  {
    id: 3,
    icon: <MdOutlineAddIcCall />,
    title: "Call Us",
    Link: "tel:9624150967",
    text: (
      <>
        +91 96241 50967
        <br />
        Any queries? Mail Now.
      </>
    ),
  },
];

const Together = () => {
  return (
    <div className="container text-center py-10 md:py-20 space-y-4 md:space-y-8">
      <PrimaryHeading>Let's Work Together</PrimaryHeading>
      <p data-aos="fade-up" className="lg:w-2/3 mx-auto md:text-2xl leading-snug tracking-tight">
        From concept to growth, we’re here to design, promote, and elevate your
        brand while guiding you every step of the way.
      </p>
      <div data-aos="fade-up" className="">
        <img src={TogetherImg} alt="" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {data.map((item) => (
          <div key={item.id} data-aos="fade-up" data-aos-delay={item.id * 200} className="flex gap-6 rounded-lg p-4">
            <Link to={item.Link} className="flex gap-6">
              <div className="text-5xl md:text-6xl">{item.icon}</div>
              <div className="text-start space-y-3">
                <h3 className="text-2xl xl:text-6xl font-bold">{item.title}</h3>
                <p className="md:text-2xl font-medium">{item.text}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Together;
