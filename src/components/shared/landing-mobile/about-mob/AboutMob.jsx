import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './AboutMob.css';
import Logo from '../../../../assets/Images/LogoSymbol.png';
import PicOne from '../../../../assets/Images/ablanding1.jpeg';
import PicTwo from '../../../../assets/Images/ablanding2.jpeg';
import PicThree from '../../../../assets/Images/ablanding3.jpeg';
import Fade from 'react-reveal';



const AboutMob = () => {

  return (
    <div className="about-container-mob" id='about-mob'>
      <Fade duration={2000} >
      <div className="center-logo">
        <img src={Logo} className='about-logo-mob'/>
      </div>
      <div className='learn-section-mob'>
      <div className="about-title-mob">Learn More About Generation Humanitarian</div>
      <div className="mission-title-mob">OUR MISSION</div>
      <div className="line-center">
          <div className="mission-line-mob">_________</div>
        </div>
        <div className="mission-paragraph-mob">
        Generations Humanitarian is committed to transformingstreet children
        toward an abundance of health, hope, and lovinghomes—thereby breaking
          the cycle of scarcity for generations to come. This isdone through
        broad research, novel development, strengthening nonprofitentities in
        development, and individual nurturing in a home environment.
      </div>
      </div>
      </Fade>
    <div className="convert-container-mob">
      <Fade duration={2000}>
      <div className="converted-col-mob">
        <div className="mission-title-mob">BECOME CONVERTED</div>
        <div className="line-center">
          <div className="mission-line-mob">_________</div>
        </div>
        <div className="mission-paragraph-mob">
          Come with us to Peru or Colombia and know these children first hand.
          Strip away the materialism that surrounds us here in the USA and
          experience how these children view the world—their humility,
          authenticity, and love. Over time, those who have come on expeditions
          join this meaningful battle to save these kids and give them life.
          Most comment how happy it makes them. There are many worthy causes in
          the world today—arts, environment, animals, and public benefit—but no
          greater joy comes from loving our fellowman and serving the “least of
          these.”
        </div>
    </div>
    </Fade>
    <Fade duration={2000}>
    <div className='carousel-container-mob'>
      <div className='carousel-animation-mob'>
        <Carousel  fade indicators={false} interval={2500}pauseOnHover={false} style={{width: '100%', height: '100%'}}>
          <Carousel.Item>
            <img src={PicOne} className='about-pic1'/>
          </Carousel.Item>
          <Carousel.Item>
            <img src={PicTwo} className='about-pic2'/>
          </Carousel.Item>
          <Carousel.Item>
            <img src={PicThree} className='about-pic3'/>  
          </Carousel.Item>
        </Carousel>
        </div>
      </div>
    </Fade>
    </div>
    </div> 
  );
};
    
 

export default AboutMob;