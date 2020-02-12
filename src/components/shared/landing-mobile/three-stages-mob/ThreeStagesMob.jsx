import React from 'react';
import "./ThreeStagesMob.css";
import Image from '../../../../assets/Images/city-buildings.jpg';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal';

const ThreeStagesMob = () => {
  return (
    <div className='ts-top-container-mob'>

    <div className='ts-top-bg-mob'>
      {/* <div className='test-image' style={{ filter: 'grayscale(100%)' }}>
        <img src={Image} className='test-image' />
      </div> */}

      <div className='ts-content-wrapper-mob'>
        <h3 className="ts-heading-mob">Three Stages of Street Children Development</h3>
        <div className='ts-mob'>
          <Fade left >
          <div className='ts-background-image-mob'>
            <div className='ts-color-opacity-mob'>
              <div className='content-mob'>
                <h3>Children at High Risk</h3>
                <span className='hr-mob'></span>
                <p>(In Absolute Poverty)</p>
                <h4>PRIMARY PREVENTION</h4>
              </div>
            </div>
          </div >
          </Fade>
          <Fade left >
          <div className='ts-background-image2-mob'>
            <div className='ts-color-opacity2-mob'>
              <div className='content-mob'>
                <h3>Children in the Street</h3>
                <span className='hr-mob'></span>
                <p>(Street Workers)</p>
                <h4>SECONDARY PREVENTION</h4>
              </div>
            </div>
          </div>
          </Fade>
            <Fade left >
          <div className='ts-background-image3-mob'>
            <div className='ts-color-opacity3-mob'>
              <div className='content-mob'>
                <h3>Children of the Street</h3>
                <span className='hr-mob'></span>
                <p>(Gamines / Disposables)</p>
                <h4>TERTIARY PREVENTION</h4>
              </div>
            </div>
          </div>
            </Fade>
            <Fade up >
          <div className='ts-long-box-mob'>
            <div className='ts-flex-mob'>
              <h2>Help support Generations Humanitarian <br></br> and our Causes</h2>
              <div className='ts-btn-row-mob'>
              <button className='ts-button-mob'><NavLink style={{textDecoration:'none'}} to='/expeditions'>Discover More</NavLink></button>
              </div>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ThreeStagesMob;
