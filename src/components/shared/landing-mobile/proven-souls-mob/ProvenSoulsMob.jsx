import React from 'react';
import './ProvenSoulsMob.css';
import { NavLink } from 'react-router-dom';
import { Fade } from "react-reveal";

const ProvenSoulsMob = () => {
  return (
  <>
    <div className='ps-container-mob'>
      <Fade duration={2000}>
      <div className='ps-title-mob'>Proven Souls. <br></br> Proven Results.</div>
      <div className='ps-para-mob'>Our oldest aged-out kids have flourished off the streets. 
        They are productive members of Peruvian, Bolivian, and Colombian society. 
        Follow them in their lives. Enjoy payback days from your gifts.</div>
        <div className='btn-div-mob'>
          <button className='proven-button-mob'>
            <NavLink to='/proven_souls'>Discover More</NavLink>
          </button>
        </div>
        </Fade>
    </div>
  </>
  )
}

export default ProvenSoulsMob;