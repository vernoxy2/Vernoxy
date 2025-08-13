import React from 'react'

import HomeHader from '../components/Home/HomeHader'
import AboutUs from '../components/Home/AboutUs'
import Services from '../components/Home/Services'
import ProjectOverview from '../components/Home/ProjectOverview'
import WhyChoose from '../components/Home/WhyChoose'
import Team from '../components/Home/Team'
import Clients from '../components/Home/Clients'
import FAQ from '../components/Home/FAQ'
import GetaQuote from '../components/Home/GetaQuote'

const Home = () => {
  return (
    <>
      <div className=''>
        <HomeHader/>
        <AboutUs/>
        <Services/>
        <ProjectOverview/>
        <WhyChoose/>
        {/* <Team/> */}
        <Clients/>
        <FAQ/>
        <GetaQuote/>
        

      </div>
    </>
  )
}

export default Home
