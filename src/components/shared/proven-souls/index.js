import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

const ProvenSouls = () => {
  return (
  <React.Fragment>
    <div className='ps-container'>
      <div className='ps-title'>Proven Souls. Proven Results.</div>
      <div className="ps-para-cont">
        <div className='ps-para'>Our oldest aged-out kids have flourished off the streets.
          They are productive members of Peruvian, Bolivian, and Colombian society.
          Follow them in their lives. Enjoy payback days from your gifts.
        </div>
      </div>
        <div className="ps-btn-cont">
          <NavLink className='proven-button' to='/proven_souls'>
            Discover More
          </NavLink>
        </div>
    </div>
  </React.Fragment>
  )
}

export default ProvenSouls;
