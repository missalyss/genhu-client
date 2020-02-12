import React from "react";
import axios from "axios";
import Stat from "./Stat";
import StatModal from "./AdminStatsModal";
import { AdminTitle, AdminButton, AdminButtonCont } from "../Styles";
import "./AdminStats.css";
import { Link } from 'react-router-dom';

class Stats extends React.Component {
  state = { stats: [], toggleModal: false };

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

  addStat = stat => {
    axios.post("/api/stats", stat).then(res => {
      const { stats } = this.state;
      this.setState({ stats: [...stats, res.data] });
      this.toggle();
    });
  };

  // toggle = () => {
  //   const { toggleForm } = this.state;
  //   this.setState({ toggleForm: !toggleForm });
  // };

  toggle = () => {
    const { toggleModal } = this.state;
    this.setState({ toggleModal: !toggleModal });
  };

  editStat = (id, stat) => {
    axios.put(`api/stats/${id}`, { stat }).then(res => {
      const stats = this.state.stats.map(stat => {
        if (stat.id === id) return res.data;
        return stat;
      });
      this.setState({ stats });
    });
  };

  deleteStat = id => {
    axios.delete(`/api/stats/${id}`).then(res => {
      const { stats } = this.state;
      this.setState({ stats: stats.filter(s => s.id !== id) });
    });
  };

  renderStats() {
    const { stats } = this.state;

    return (
      <div className="stat-row">
        {stats.map(stat => (
          <Stat
            key={stat.id}
            {...stat}
            editStat={this.editStat}
            deleteStat={this.deleteStat}
            show={this.toggle} 
            toggle={this.toggle} 
            onHide={ this.toggle } 
            toggleShow = { this.toggle }
  
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="sa-container" style={{padding: '5em 0em'}}>
        <h1 className='homes-title'>Stats Page</h1>
        {/* <div className="button-cont-sa"> */}
        <AdminButtonCont>
          <AdminButton  onClick={this.toggle}>
            Add New Stat
          </AdminButton>
        <Link to='/admin'>
          <AdminButton  onClick={this.toggle} >
            Back
          </AdminButton>
         </Link>
        </AdminButtonCont>
         {/* </div> */}
         {this.state.toggleModal ? (
          <div className='center'> 
          <StatModal 
          show={this.toggle} 
          toggle={this.toggle} 
          onHide={ this.toggle } 
          toggleShow = { this.toggle }
          addStat={this.addStat}
          /> 
          </div>
        ) : (
            <div></div>
          )}
        {/* {this.state.toggleForm ? (
          <div className='center'> <StatForm addStat={this.addStat} /> </div>
        ) : (
          <div></div>
        )} */}
        {this.renderStats()}
        {/* </AdminTitle> */}
      </div>
    );
  }
}

export default Stats;


