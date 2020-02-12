import React from 'react';
import { GlobalTitle } from './GlobalStyles';
import Navbar from './Navbar';
import AboutLanding from '../shared/AboutLanding';
import './AboutLanding.css';
import { AboutCarousel } from '../shared/AboutLanding';
import LandingCarousel from './Carousel';
import Stats from './LandingStats'
import ProvenSouls from '../shared/Proved-souls';
import ThreeStages from '../shared/ThreeStages';
import './Main.css';
import {Fade} from 'react-reveal';


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