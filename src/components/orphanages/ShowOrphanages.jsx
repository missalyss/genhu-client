import React from 'react';
import axios from 'axios';
import Footer from '../shared/Footer';
import CountUp from 'react-countup';
import './ShowOrphanages.css';
import {Fade} from 'react-reveal';


class ShowOrphanages extends React.Component {
 state = { orphanage: {} }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/homes/${id}`)
    .then(res => {
      this.setState({ orphanage: res.data})
    })
  }

  componentDidUpdate() {
    this.componentDidMount()
  }

  renderCountUpShelteredO = () => {
    if (this.state.orphanage.sheltered_children) {
      return(
        <CountUp end={this.state.orphanage.sheltered_children} />
      )
    }
  }
  renderCountUpOrphansO = () => {
    if (this.state.orphanage.orphans) {
      return(
        <CountUp end={this.state.orphanage.orphans} />
      )
    }
  }
  renderCountUpVictimsO = () => {
    if (this.state.orphanage.victims) {
      return(
        <CountUp end={this.state.orphanage.victims} />
      )
    }
  }
  renderCountUpVolunteersO = () => {
    if (this.state.orphanage.volunteers) {
      return(
        <CountUp end={this.state.orphanage.volunteers} />
      )
    }
  }


  render() {
    const { orphanage } = this.state;
    return(
      <>
      <div className='centers-top-cont'>
      {/* <h1>SHOW ME</h1> */}
      <div className='orphanage-img'>
        <div className='centers-dir'>
          <h1 className='dir-title'>{orphanage.name}</h1>
          <div className='centers-dir-flex'>
            <div className='centers-dir-col'>
              <h1>{orphanage.director}</h1>
              <p>Director</p>
            </div>
            <div className='centers-dir-col'>
              <h1>{orphanage.sponsor}</h1>
              <p>Home Sponsor</p>
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
            <div className='homes-stat-font'>{ this.renderCountUpShelteredO() } </div>
            <p className='homes-stat-title'>Sheltered Children</p>
          </div>
        </div>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            <div className='homes-stat-font'>{ this.renderCountUpVictimsO() }% </div>
            <p className='homes-stat-title'>Victims of Armed Conflict</p>
          </div>
        </div>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            <div className='homes-stat-font'>{ this.renderCountUpOrphansO() }% </div>
            <p className='homes-stat-title'>Orhpans</p>
          </div>
        </div>
        <div className='centers-single-stat'>
          <div className='centers-single-stat-col'>
            <div className='homes-stat-font'>{ this.renderCountUpVolunteersO() }</div> 
            <p className='homes-stat-title'>Regular Volunteers</p>
          </div>
        </div>

      </div>
      <Fade duration={2000}>
        <div className='cntr-content-home'>
          <div className='cntr-col'>
            <div style={{height: '25%'}}>
            <h1>About {orphanage.name} </h1>
            </div>
          <div className="about-info">
            <p dangerouslySetInnerHTML={{__html: orphanage.description}}></p>
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


export default ShowOrphanages;