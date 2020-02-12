import React from 'react';

import CarouselMob from './carousel-mob/CarouselMob';
import ProvenSoulsMob from './proven-souls-mob/ProvenSoulsMob';
import LandingStatsMob from './landing-stats-mob/LandingStatsMob';
import AboutMob from '../landing-mobile/about-mob/AboutMob';
// import { AboutCarouselMob } from '../landing-mobile/about-mob/AboutMob';
import ThreeStagesMob from '../landing-mobile/three-stages-mob/ThreeStagesMob';

const LandingMob = () => (
  <React.Fragment>
    {/* <NavMob /> */}
    <CarouselMob />
    <ProvenSoulsMob />
    <LandingStatsMob />
    <AboutMob />
    {/* <AboutCarouselMob /> */}
    <ThreeStagesMob />
  </React.Fragment>
)

export default LandingMob;
