import React from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import './ShowOrphanageMob.css';
import { Fade } from 'react-reveal';


class ShowOrphanageMob extends React.Component {
 state = { orphanage: {} }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/homes/${id}`)
    .then(res => {
      this.setState({ orphanage: res.data})
    })
  }

  componentDidUpdate() {
    // this.componentDidMount()
  }

  renderCountUpShelteredO = () => {
    if (this.state.orphanage.sheltered_children) {
      return(
        <CountUp delay={2} end={this.state.orphanage.sheltered_children} />
      )
    }
  }
  renderCountUpOrphansO = () => {
    if (this.state.orphanage.orphans) {
      return(
        <CountUp delay={2} end={this.state.orphanage.orphans} />
      )
    }
  }
  renderCountUpVictimsO = () => {
    if (this.state.orphanage.victims) {
      return(
        <CountUp delay={3} end={this.state.orphanage.victims} />
      )
    }
  }
  renderCountUpVolunteersO = () => {
    if (this.state.orphanage.volunteers) {
      return(
        <CountUp delay={3} end={this.state.orphanage.volunteers} />
      )
    }
  }


  render() {
    const { orphanage } = this.state;
    return(
      <>
      <div className='centers-top-cont-mob'>
      {/* <h1>SHOW ME</h1> */}
      <div className='orphanage-img-mob'>
        <div className='centers-dir-mob'>
          <h1 className='dir-title-mob'>{orphanage.name}</h1>
          <div className='centers-dir-flex-mob'>
            <div className='centers-dir-col-mob'>
              <h1>{orphanage.director}</h1>
              <p>Director</p>
            </div>
            <div className='centers-dir-col-mob'>
              <h1>{orphanage.sponsor}</h1>
              <p>Home Sponsor</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className='centers-stats-cont-mob'>
        <Fade left>
          <div className='centers-single-stat-mob'>
            <div className='centers-single-stat-col-mob'>
              <div className='homes-stat-font-mob'>{ this.renderCountUpShelteredO() } </div>
              <p className='homes-stat-title-mob'>Sheltered Children</p>
            </div>
          </div>
        </Fade>
        <Fade left delay={500}>
          <div className='centers-single-stat-mob'>
            <div className='centers-single-stat-col-mob'>
              <div className='homes-stat-font-mob'>{ this.renderCountUpVictimsO() }% </div>
              <p className='homes-stat-title'>Victims of Armed Conflict</p>
            </div>
          </div>
        </Fade>
        <Fade left delay={1000}>
          <div className='centers-single-stat-mob'>
            <div className='centers-single-stat-col-mob'>
              <div className='homes-stat-font-mob'>{ this.renderCountUpOrphansO() }% </div>
              <p className='homes-stat-title-mob'>Orphans</p>
            </div>
          </div>
        </Fade>
        <Fade left delay={1250}>
          <div className='centers-single-stat-mob'>
            <div className='centers-single-stat-col-mob'>
              <div className='homes-stat-font-mob'>{ this.renderCountUpVolunteersO() }</div> 
              <p className='homes-stat-title-mob'>Regular Volunteers</p>
            </div>
          </div>
        </Fade>

      </div>
      <div className='cntr-content-home-mob'>
        <div className='cntr-col-mob'>
          <div>
          <h1>About {orphanage.name} </h1>
          </div>
        <div className='about-words-mob'>
          <p dangerouslySetInnerHTML={{__html: orphanage.description}}></p>
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


export default ShowOrphanageMob;