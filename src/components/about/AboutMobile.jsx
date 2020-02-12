import React, { Component } from 'react';
import About from './About';
import AboutMobileStyles from "./AboutMobileStyles.css";

class AboutMobile extends Component {
  render() {
    return (
      <div className='about-page-mobile'>
        <About />
      </div>  
    )
  }
}

export default AboutMobile;