import React from 'react';
import Navbar from './Navbar';
import AboutLanding from './AboutLanding';
import './AboutLanding.css';
import { AboutCarousel } from './AboutLanding';
import LandingCarousel from './landing-carousel';
import Stats from './landing-stats'
import ProvenSouls from './proven-souls';
import ThreeStages from './three-stages';
import './Main.css';
import { Fade } from 'react-reveal';


const Landing = () => {
  return(
    <div>
         <LandingCarousel />
         <Fade duration={2000}>
         <ProvenSouls />
         <Stats/>
         <AboutLanding />
         <AboutCarousel />
         <ThreeStages />
         </Fade>
    </div>
  )
}


export default Landing;
