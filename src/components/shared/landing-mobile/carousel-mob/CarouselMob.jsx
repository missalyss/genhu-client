import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Title, SubHeading, Button } from '../../../styles/StyledComponents';
import './CarouselMob.css';
import { HashLink as Link } from 'react-router-hash-link';

// style={{border: 'solid 1px blue'}}

const LandingCarousel = () => {
  return(
    <Carousel className='hero-wrapper-mob' fade indicators={false} interval={2500} pauseOnHover={false}>
      <Carousel.Item className='hero-pic1-mob'>
          <div className='hero-mob-align_row' >
            <div className='hero-mob-align_col' >
              {/* <Carousel.Caption> */}
              <Title className={`title-car-mob`}>Welcome to Generations Humanitarian</Title>
              <br></br>
              <SubHeading className="subhead-car-mob">We build and operate orphanages and drop-in centers for street children in Latin America</SubHeading>
              {/* </Carousel.Caption> */}
              <br></br>
              <Link
              smooth to='/#about-mob'
              >
              <Button>Learn More</Button>
              </Link>
          </div>
          
        </div>
      </Carousel.Item>
      <Carousel.Item className='hero-pic2-mob'>
          <div className='hero-mob-align_row' >
            <div className='hero-mob-align_col' >
              {/* <Carousel.Caption> */}
              <Title className='title-car-mob'>Come to <br></br>South America <br></br> in 2019</Title>
              <br></br>
              <SubHeading className="subhead-car-mob">Contact us for a group's custom expedition</SubHeading>
              {/* </Carousel.Caption> */}
              <br></br>
                <Link
                smooth to='/#about-mob'
                >
                <Button >Learn More</Button>
                </Link>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='hero-pic3-mob'>
          <div className='hero-mob-align_row' >
            <div className='hero-mob-align_col' >
              {/* <Carousel.Caption> */}
              <Title className='title-car-mob'>Refuge Crisis</Title>
              <br></br>
              <SubHeading className="subhead-car-mob">Help Venezuela Refugee Children</SubHeading>
              {/* </Carousel.Caption> */}
              <br></br>
              <Link
              smooth to='/#about-mob'
              >
              <Button>Learn More</Button>
              </Link>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='hero-pic4-mob'>
          <div className='hero-mob-align_row' >
            <div className='hero-mob-align_col'>
              {/* <Carousel.Caption> */}
              <Title className='title-car-mob'>Greenhouse & Hydroponics Project</Title>
              <br></br>
              <SubHeading className="subhead-car-mob">We are creating self-sustaining, scalable, water efficient, organice greenhouses 
                that teach children a work ethic, give them price in their produce, and funds their home.</SubHeading>
              {/* </Carousel.Caption> */}
              <br></br>
              <Link
              smooth to='/#about-mob'
              >
              <Button>Learn More</Button>
              </Link>
          </div>
        </div>
      </Carousel.Item>
 
  </Carousel>
  )
}

export default LandingCarousel;