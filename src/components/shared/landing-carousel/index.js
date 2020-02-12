import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles.css';
import { HashLink as Link } from 'react-router-hash-link';

const LandingCarousel = () => {
  return(
    <Carousel className='hero-wrapper' fade indicators={false} interval={2500} pauseOnHover={false}>
      <Carousel.Item className='hero-pic1'>
          <div className='hero-align_row' >
            <div className='hero-align_col' >
              {/* <Carousel.Caption> */}
              <h1 className='title-car-med'>Welcome to <br></br> Generations Humanitarian</h1>
              <br></br>
              <h2 className="subhead-car-med">We build and operate orphanages and drop-in centers for street children in Latin America</h2>
              {/* </Carousel.Caption> */}
              <br></br>
              <Link
              smooth to='/#about'
              >
              <button>Learn More</button>
              </Link>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='hero-pic2'>
          <div className='hero-align_row' >
            <div className='hero-align_col' >
              {/* <Carousel.Caption> */}
              <h1 className='title-car-med'>Come to <br></br>South America <br></br>in 2019</h1>
              <br></br>
              <h2 className="subhead-car-med">Contact us for a group's custom expedition</h2>
              {/* </Carousel.Caption> */}
              <br></br>
              <Link
              smooth to='/#about'
              >
              <button >Learn More</button>
              </Link>

          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='hero-pic3'>
          <div className='hero-align_row' >
            <div className='hero-align_col' >
              {/* <Carousel.Caption> */}
              <h1 className='title-car-med'>Refuge Crisis</h1>
              <br></br>
              <h2 className="subhead-car-med">Help Venezuela Refugee Children</h2>
              {/* </Carousel.Caption> */}
              <br></br>
              <Link
              smooth to='/#about'
              >
              <button>Learn More</button>
              </Link>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='hero-pic4'>
          <div className='hero-align_row' >
            <div className='hero-align_col'>
              {/* <Carousel.Caption> */}
              <h1 className='title-car-med'>Greenhouse & Hydroponics Project</h1>
              <br></br>
              <h2 className="subhead-car-med">We are creating self-sustaining, scalable, water efficient, organice greenhouses
                that teach children a work ethic, give them price in their produce, and funds their home.</h2>
              {/* </Carousel.Caption> */}
              <br></br>
              <Link
              smooth to='/#about'
              >
              <button>Learn More</button>
              </Link>
          </div>
        </div>
      </Carousel.Item>

  </Carousel>
  )
}

export default LandingCarousel;
