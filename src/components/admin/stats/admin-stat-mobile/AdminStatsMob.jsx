import React from "react";
import axios from "axios";
import Stat from "./AdminStatMob";
import StatForm from "./AdminStatFormMob";
import { AdminTitle, AdminButtonMob, AdminButtonCont } from "../../Styles";
import "./AdminStatsMob.css";
import { Link } from 'react-router-dom';
import StatModal from '../AdminStatsModal';

class StatsMob extends React.Component {
  state = { stats: [], toggleForm: false };

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
      <div className="stat-row-mob">
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
      <div className="sa-container-mob">
        <h1 className="emp-page-heading-mob">Stats Page</h1>
        <div className="button-cont-sa-mob">
        <AdminButtonCont>
          <AdminButtonMob onClick={this.toggle}>
            Add New Stat
          </AdminButtonMob>
        <Link to='/admin'>
          <AdminButtonMob  onClick={this.toggle} >
            Back
          </AdminButtonMob>
         </Link>
        </AdminButtonCont>
         </div>
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
        {this.renderStats()}
        {/* </AdminTitle> */}
      </div>
    );
  }
}

export default StatsMob;


