import React from "react";
import Menu from "../../../assets/Icons/Menu.svg";
import Logo from "../../../assets/Images/LogoSymbol.png";
import { NavLink } from 'react-router-dom';
import styles from './NavStyles.css';

const NavMobile = ({ toggleNavModal, showNavModal }) => {
  return showNavModal === false ? (
    <div className="main-nav-mobile">
      <NavLink to='/'>
        <img src={Logo} alt="logo" className="genhu-icon" />
      </NavLink>
        <img src={Menu} onClick={toggleNavModal} alt="menu-icon" className="menu-mob-icon" />
    </div>
  ) : (
    <></>
  );
};

export default NavMobile;