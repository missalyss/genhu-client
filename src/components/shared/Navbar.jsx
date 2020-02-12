import React from 'react';
import { NavLink, Link, Redirect} from "react-router-dom";
import styles from'./Main.css';
import { Image } from 'semantic-ui-react';
import Logo from "../../assets/Images/GENHU-logo-fake.png";
import Facebook from "../../assets/Images/facebook.png";
import axios from 'axios';
import { withRouter } from "react-router-dom";
import ScrollToTop from '../shared/ScrollToTop'

class Navbar extends React.Component {
  state = {orphanages: [], centers: []}

  componentDidMount() {
    axios.get('/api/orphanages')
    .then(res => {
      this.setState({ orphanages: res.data })
    })

    axios.get('/api/centers')
    .then(res => {
      this.setState({ centers: res.data })
    })

  }
  
  renderO = () => {
    const { orphanages } = this.state;
    
    return (
      <>
        {orphanages.map(o => (
          <div
            key={o.id}
            {...o}
            >
              <Link to={{ pathname: `/orphanages/${o.id}` }} {...o}>{o.name}</Link></div>
              // {/* <Redirect to={{ pathname: `/orphanages/${o.id}` }} {...o}>{o.name}</Redirect></div> */}
            ))}
      </>
    );
  }
  renderC = () => {
    const { centers } = this.state;

    return (
      <>
        {centers.map(c => (
          <div
            key={c.id}
            {...c}
            ><Link to={{ pathname: `/centers/${c.id}` }} {...c}>{c.name}</Link></div>
            ))}
      </>
    );
  }

  render() {
  return(
    <div className='main-nav'>
      <ScrollToTop><div className='nav-home'>
        <NavLink to="/"><Image src={Logo} className='logo-image' alt='logo'/></NavLink>
      </div></ScrollToTop>
      <div className='right_nav'>
        <div className='hide-me'>
        <NavLink to="/" className='nav-item'>Home</NavLink>
        </div>
        <NavLink to="/calendar" className='nav-item'>Calendar</NavLink>
        <div className='dropdown'>
        <NavLink to="/about" className='nav-item'>About Us</NavLink>
        <div className='dropdown-content'>
        <NavLink to='/staff'>Staff & Volunteers</NavLink>
        <NavLink to='/policy'>Policy & Financial</NavLink>
        <NavLink to='/proven_souls'>Proven Souls</NavLink>
        </div>
        </div>
        <NavLink to="/expeditions" className='nav-item'>Expeditions</NavLink>
        <div className='dropdown'>
        <NavLink to="#" className='nav-item' style={{cursor: "default"}}>Homes & Projects</NavLink>
        <div className='dropdown-content'>

        <NavLink to='/orphanages'>Orphanages</NavLink>
          <div className='homes-tab'>
          { this.renderO() }
          </div>
        <NavLink to='/drop_in_centers'>Drop-In Centers</NavLink>
          <div className='homes-tab'>
            { this.renderC() }
          </div>
        </div>
        </div>
        <NavLink to="/contact" className='nav-item'>Contact Us</NavLink>
        <a href="https://www.facebook.com/genhu.org/" target="_blank"><Image src={Facebook} className='facebook-image' alt='facebook'/></a>     
      </div>
    </div>
  )
}
}

export default Navbar;

