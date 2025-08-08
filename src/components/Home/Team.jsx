import React from 'react'
import PrimaryHeading from '../PrimaryCompo/PrimaryHeading'
import { SlidersHorizontal } from 'lucide-react';

const services = [
  {
    img: <SlidersHorizontal className="text-4xl"/>,
    title: "John Doe",
    desc: "John is our SEO specialist with a keen eye for optimizing websites and driving organic traffic. With years of experience, he ensures our clients rank high on search engines.",
  },
 {
    img: <SlidersHorizontal className="text-4xl"/>,
    title: "John Doe",
    desc: "John is our SEO specialist with a keen eye for optimizing websites and driving organic traffic. With years of experience, he ensures our clients rank high on search engines.",
  },
   {
    img: <SlidersHorizontal className="text-4xl"/>,
    title: "John Doe",
    desc: "John is our SEO specialist with a keen eye for optimizing websites and driving organic traffic. With years of experience, he ensures our clients rank high on search engines.",
  },
];

const Team = () => {
  return (
    <section className='py-10'>
        <PrimaryHeading><span className='font-bold bg-gradient-to-r from-[#1168B5] to-[#4ED5E2] bg-clip-text text-transparent'>Meet </span>Our Team</PrimaryHeading>
        <p className='text-lg leading-snug text-center'>Get to know the talented individuals who drive our agency forward. Learn about our team's expertise, passion, and commitment to delivering exceptional results for our clients.</p>
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 bg-white justify-center items-start p-5 hover:shadow-lg transition shadow-xl rounded-2xl"
          >
            <div className='h-[300px] w-full bg-gray-500 rounded-2xl'></div>
            <h3 className="text-2xl font-medium">{service.title}</h3>

            <p className="text-lg leading-snug">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Team
