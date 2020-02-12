import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './NavStyles.css';
import { Fade } from "react-reveal";
import Exit from '../../../assets/Icons/Exit.svg';
import Facebook from "../../../assets/Icons/facebook.svg";
import { Image } from 'semantic-ui-react';

const NavModal = ({ showNavModal, toggleNavModal }) => {
  return showNavModal === true ? (
    <div className="modal-main">
      <Fade>
          <div className="icon-container">
            <div className="modal-icon">
            {/* Color is in svg Fill: 'white' and background color in modal-icon css */}
              <img src={Exit} onClick={toggleNavModal} className='exit-icon'/>
            </div>
            <div className="modal-column">
          </div>
          <div className='mob-nav-item'>
            <NavLink to="/">
              <button onClick={toggleNavModal} className='modal-button'>Home</button>
            </NavLink>
          </div>
          <div className='mob-nav-item'>
            <NavLink to="/calendar">
              <button onClick={toggleNavModal} className='modal-button'>Calendar</button>
            </NavLink>
          </div>
          <div className='mob-nav-item'>
            <NavLink to="/about">
              <button onClick={toggleNavModal} className='modal-button'>About Us</button>
            </NavLink>
          </div>
          <div className='mob-nav-item'>
            <NavLink to="/expeditions">
              <button onClick={toggleNavModal} className='modal-button'>Expeditions</button>
            </NavLink>
          </div>
          <div className='mob-nav-item'>
            <NavLink to="/homes">
              <button onClick={toggleNavModal} className='modal-button'>Homes & Projects</button>
            </NavLink>
          </div>
          <div className='mob-nav-item'>
            <NavLink to="/contact">
              <button onClick={toggleNavModal} className='modal-button'>Contact Us</button>
            </NavLink>
          </div>
          <div className='mob-nav-item'>
            <a href="https://www.facebook.com/genhu.org/" target="_blank">
            <button onClick={toggleNavModal} className='modal-button'><Image src={Facebook} alt='facebook icon' className='facebook' /></button>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  ) : (
    <></>
  );
};

export default NavModal;