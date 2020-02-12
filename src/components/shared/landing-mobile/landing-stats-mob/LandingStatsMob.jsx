import React from "react";
import axios from "axios";
import './LandingStatsMob.css';
import { Fade } from "react-reveal";


class LandingStatsMob extends React.Component {
  state = { stats: [] };

  componentDidMount() {
    axios
      .get("/api/stats")
      .then(res => {
        this.setState({ stats: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderStats() {
    const { stats } = this.state;

    return (
      <div className="stats-container-mob">
        {stats.map(stat => (
          <Fade left>
          <div className="la-single-stat-mob">
            <div className="stat-value-mob">{stat.value}</div>
            <div className="stat-name-mob">{stat.name}</div>
          </div>
        </Fade>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="stats-body-mob">
        <div className="statsHeader-mob">
          <Fade duration={2000}>
          <h1 style={{ marginTop: "4rem", fontSize: '2em' }}>SUCCESS</h1>
          <div className="stats-line-mob"></div>
          <h1>Since 2008</h1> 
          <h1>You have cared</h1> 
          <h1>We did the math</h1>
          </Fade>
         
          <div className="stats-container-mob">
            {/* <Fade left> */}
              {this.renderStats()}
              {/* </Fade> */}
          </div>
        </div>
      </div>
    );
  }
}

export default LandingStatsMob;
