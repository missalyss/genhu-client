import React from "react";
import axios from "axios";
import "./LandingStats.css";

class LandingStats extends React.Component {
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
      <div className="stats-container">
        {stats.map(stat => (
          <div className="la-single-stat">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-name">{stat.name}</div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="stats-body">
        <div className="statsHeader">
          <h1 style={{ marginTop: "4rem", fontSize: '2em' }}>SUCCESS </h1>
          <div className="stats-line"></div>
          <h1>Since 2008. You have cared. We did the math.</h1>
          <br />
         
          <div className="stats-container">{this.renderStats()}</div>
        </div>
      </div>
    );
  }
}

export default LandingStats;
