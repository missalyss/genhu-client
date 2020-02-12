import React from 'react';
import "./styles.css"
import { NavLink, Link } from 'react-router-dom';


const Stats = () => {
  return(
    <div className='footer-container'>
      <div className="row">
        <div className="column">

          <h2 className= 'header'>OUR MISSION</h2>
          <p className='mission'>Generations Humanitarian is committed to transform street children toward an abundance of health,
             hope, and loving homes—thereby breaking the cycle of scarcity for generations to come.
             This is done through broad research, novel development, strengthening nonprofit entities in development,
             and individual nurturing in a home environment.</p>

        </div>
        <div className="column">
        <NavLink to='/expeditions' className='NavLink'>
          <h2 className= 'header'>GET INVOLVED</h2>
          <p>Go on an expedition</p>
          <p>Gift Levels:</p>
          <p>Support Sponsor: $50-100 monthly</p>
          <p>Research Sponsor: $250 monthly</p>
          <p>Home Nurturing Sponsor: $1500+ monthly</p>
          <p>Volunteer and Fundraise</p>
          <br /><br />
          </NavLink>
        </div>
        <div className="column">
          <h2 className= 'header'>LEGAL STUFF</h2>
          <p><NavLink to='/policy' className='NavLink'>Policy and Financial</NavLink></p>
          <p><NavLink to='/privacy' className='NavLink'>Privacy</NavLink></p>
          <br /><br />
        </div>
        <div className="column">
          <h2 className= 'header'><Link to="/contact">CONTACT US</Link></h2>

        </div>
        </div>
    </div>
  )
}

export default Stats;

