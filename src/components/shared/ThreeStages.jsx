import React from 'react';
import "./ThreeStages.css";
import Image from '../../assets/Images/city-buildings.jpg';
import { NavLink } from 'react-router-dom';

const ThreeStages = () => {
  return (
    <div className='ts-top-container'>

    <div className='ts-top-bg'>
      {/* <div className='test-image' style={{ filter: 'grayscale(100%)' }}>
        <img src={Image} className='test-image' />
      </div> */}

      <div className='ts-content-wrapper'>
        <h3 className="ts-heading">Three Stages of Street Children Development</h3>
        <div className='ts'>
          <div className='ts-background-image'>
            <div className='ts-color-opacity'>
              <div className='content'>
                <h3>Children at High Risk</h3>
                <span className='hr'></span>
                <p>(In Absolute Poverty)</p>
                <h4>PRIMARY PREVENTION</h4>
              </div>
            </div>
          </div >
          <div className='ts-background-image2'>
            <div className='ts-color-opacity2'>
              <div className='content'>
                <h3>Children in the Street</h3>
                <span className='hr'></span>
                <p>(Street Workers)</p>
                <h4>SECONDARY PREVENTION</h4>
              </div>
            </div>
          </div>
          <div className='ts-background-image3'>
            <div className='ts-color-opacity3'>
              <div className='content'>
                <h3>Children of the Street</h3>
                <span className='hr'></span>
                <p>(Gamines / Disposables)</p>
                <h4>TERTIARY PREVENTION</h4>
              </div>
            </div>
          </div>
          <div className='ts-long-box'>
            <div className='ts-flex'>
              <h2>Help Support Generations Humanitarian and Our Causes</h2>
              <div className='ts-btn-row'>
              <button className='ts-button'><NavLink style={{textDecoration:'none'}} to='/expeditions'>Discover More</NavLink></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ThreeStages;
