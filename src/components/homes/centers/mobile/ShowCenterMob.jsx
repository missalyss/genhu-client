import React from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import './ShowCenterMob.css';
import { Fade } from 'react-reveal';


class ShowCentersMob extends React.Component {
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
        <CountUp delay={2} end={this.state.center.sheltered_children} />
      )
    }
  }
  renderCountUpOrphans = () => {
    if (this.state.center.orphans) {
      return(
        <CountUp delay={2} end={this.state.center.orphans} />
      )
    }
  }
  renderCountUpVictims = () => {
    if (this.state.center.victims) {
      return(
        <CountUp delay={3} end={this.state.center.victims} />
      )
    }
  }
  renderCountUpVolunteers = () => {
    if (this.state.center.volunteers) {
      return(
        <CountUp delay={3} end={this.state.center.volunteers} />
      )
    }
  }

  
  render() {
    const { center } = this.state;
        return(
      <>
      <div className='centers-top-cont-mob'>
      {/* <h1>SHOW ME</h1> */}
      <div className='centers-img-mob'>
        <div className='centers-dir-mob'>
          <h1 className='dir-title-mob'>{center.name} <br></br> Drop-in Center</h1>
          <div className='centers-dir-flex-mob'>
            <div className='centers-dir-col-mob'>
              <h1>{center.director}</h1>
              <p>Director</p>
            </div>
            <div className='centers-dir-col-mob'>
              <h1>{center.sponsor}</h1>
              <p>Center Sponsor</p>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* ------ STATS CONTAINER ---------- */}

      <div className='centers-stats-cont-mob'>
        <Fade left>
          <div className='centers-single-stat-mob'>
            <div className='centers-single-stat-col-mob'>
              <div className='homes-stat-font'>{ this.renderCountUpSheltered() } </div>
              <p className='homes-stat-title'>Sheltered Children</p>
            </div>
          </div>
        </Fade>
        <Fade left delay={500}>
          <div className='centers-single-stat-mob'>
            <div className='centers-single-stat-col-mob'>
              <div className='homes-stat-font-mob'>{ this.renderCountUpVictims() }% </div>
              <p className='homes-stat-title-mob'>Victims of Armed Conflict</p>
            </div>
          </div>
        </Fade>
        <Fade left delay={1000}>
          <div className='centers-single-stat-mob'>
            <div className='centers-single-stat-col-mob'>
              <div className='homes-stat-font-mob'>
                { this.renderCountUpOrphans() }% </div>
              <p className='homes-stat-title-mob'>Orhpans</p>
            </div>
          </div>
        </Fade>
        <Fade left delay={1250}>
        <div className='centers-single-stat-mob'>
          <div className='centers-single-stat-col-mob'>
            <div className='homes-stat-font-mob'>{ this.renderCountUpVolunteers() }</div> 
            <p className='homes-stat-title-mob'>Regular Volunteers</p>
          </div>
        </div>
        </Fade>
      </div>

          {/* About Home Section */}

      <div className='cntr-content-home-mob'>
        <div className='cntr-col-mob'>
          <div>
          <div>
          <h1>About {center.name} </h1>
          </div>
        <div className='about-words-mob'>
          <p dangerouslySetInnerHTML={{__html: center.description}}></p>
        </div>
          </div>
        </div>
        <div className='cntr-col-mob'>
          <div>
            <h1>Image Coming Soon</h1>
          </div>
        </div>
      </div>
      </>
      )
    }
}


export default ShowCentersMob;