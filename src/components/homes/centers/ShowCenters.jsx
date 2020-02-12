import React from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import Footer from '../../shared/Footer';
import './ShowCenters.css';
import {Fade} from 'react-reveal';


class ShowCenters extends React.Component {
 state = { center: {} }

 componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/homes/${id}`)
    .then(res => {
      this.setState({ center: res.data})
    })
  }

  componentDidUpdate() {
    this.componentDidMount()
  }

  renderCountUpSheltered = () => {
    if (this.state.center.sheltered_children) {
      return(
        <CountUp end={this.state.center.sheltered_children} />
      )
    }
  }
  renderCountUpOrphans = () => {
    if (this.state.center.orphans) {
      return(
        <CountUp end={this.state.center.orphans} />
      )
    }
  }
  renderCountUpVictims = () => {
    if (this.state.center.victims) {
      return(
        <CountUp end={this.state.center.victims} />
      )
    }
  }
  renderCountUpVolunteers = () => {
    if (this.state.center.volunteers) {
      return(
        <CountUp end={this.state.center.volunteers} />
      )
    }
  }

  
  render() {
    const { center } = this.state;
        return(
      <>
      <div className='centers-top-cont'>
      {/* <h1>SHOW ME</h1> */}
      <div className='centers-img'>
        <div className='centers-dir'>
          <h1 className='dir-title'>{center.name} Drop-in Center</h1>
          <div className='centers-dir-flex'>
            <div className='centers-dir-col'>
              <h1>{center.director}</h1>
              <p>Director</p>
            </div>
            <div className='centers-dir-col'>
              <h1>{center.sponsor}</h1>
              <p>Center Sponsor</p>
            </div>
          </div>
        </div>
        </div>
        <div className='centers-map'>
          <h1>Map</h1>
        </div>
      </div>
      <div className='centers-stats-cont'>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            <div className='homes-stat-font'>{ this.renderCountUpSheltered() } </div>
            <p className='homes-stat-title'>Sheltered Children</p>
          </div>
        </div>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            <div className='homes-stat-font'>{ this.renderCountUpVictims() }% </div>
            <p className='homes-stat-title'>Victims of Armed Conflict</p>
          </div>
        </div>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            <div className='homes-stat-font'>
              { this.renderCountUpOrphans() }% </div>
            <p className='homes-stat-title'>Orhpans <br></br></p>
          </div>
        </div>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            <div className='homes-stat-font'>{ this.renderCountUpVolunteers() }</div> 
            <p className='homes-stat-title'>Regular Volunteers</p>
          </div>
        </div>

      </div>
      <Fade duration={2000}>
      <div className='cntr-content-home'>
        <div className='cntr-col'>
          <div>
          <div style={{height: '25%'}}>
          <h1>About {center.name} </h1>
          </div>
        <div className='about-info'>
          <p dangerouslySetInnerHTML={{__html: center.description}}></p>
        </div>
          </div>
        </div>
        <div className='cntr-col-img'>
          <div>
            <h1>Image Coming Soon</h1>
          </div>
        </div>
      </div>
      </Fade>
      </>
      )
    }
}


export default ShowCenters;