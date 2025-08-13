import React from "react";
import AboutHeader from "../components/About/AboutHeader";
import WeAre from "../components/About/WeAre";
import Goals from "../components/About/Goals";
import ClientsSay from "../components/About/ClientsSay";

const About = () => {
  return (
    <div>
      <AboutHeader />
      <WeAre/>  
      <Goals/>
      <ClientsSay/>
    </div>
  );
};

export default About;
