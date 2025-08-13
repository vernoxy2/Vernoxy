import React from "react";
import PrimaryHeading from "../PrimaryCompo/PrimaryHeading";
import Project from "../../assets/HomePageImgs/Projects.webp";

const ProjectOverview = () => {
  return (
    <section className="py-10">
      <PrimaryHeading>Project Overview</PrimaryHeading>
      <div className="container pl-0">
        <div className=" bg-gradient-to-t from-[#4ED5E2]/50 to-transparent rounded-r-[70px] p-5 px-24 flex items-end justify-end">
          <img
            src={Project}
            alt="Project visual"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
