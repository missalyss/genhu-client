import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './HomesMob.css';
import { Fade } from 'react-reveal';

class HomesMob extends Component {
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
                  {/* <Fade left cascade> */}
                <button className='btn-home-mob'>

              <Link 
                to={{ pathname: `/orphanages/${o.id}` }} 
                style={{textDecoration: 'none', color: 'white'}}
                {...o}
                >
                  {o.name} 
                  </Link>
              </button>
              {/* </Fade> */}
          </div>
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
            >
            <button className='btn-home-mob'>
              <Link to={{ pathname: `/centers/${c.id}` }} 
              style={{textDecoration: 'none', color: 'white'}}
              {...c}
              >
                {c.name}
                </Link>
            </button>
          </div>
            ))}
      </>
    );
  }

  render() {
    return(
      <>
        <div className="home-main-head">
          <h1>Homes & Projects</h1>
        </div>
      <div className="home-cont-mob">
        <div className="title-cont-home">
          <h3>Orphanages</h3>
        </div>

          <Fade left cascade>
        <ul>

         { this.renderO() }
        </ul>
          </Fade>
      </div>
      <div className="home-cont-mob">
        <div className="title-cont-home">
          <h3>Drop-In Centers</h3>
        </div>
        <ul>
         { this.renderC() }
        </ul>
      </div>
      </>
    )
  }
}

export default HomesMob;