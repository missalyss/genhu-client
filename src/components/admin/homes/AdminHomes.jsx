import React from "react";
import axios from "axios";
import Orphanage from "./orphanages/Orphanage";
import Center from "./orphanages/Center";
import HomeForm from "./AdminHomeForm";
import { AdminTitle, AdminSubTitle, AdminButton, AdminButtonCont } from "../Styles";
import "../stats/AdminStats.css";
import { Link } from 'react-router-dom';
import HomeModal from './orphanages/HomeModal';
import '../../staff/StaffModal.css';

class HomesMob extends React.Component {
  state = { homes: [], orphanages: [], centers: [], toggleModal: false };

  componentDidMount() {
    axios
      .get("/api/homes")
      .then(res => {
        this.setState({ homes: res.data });
      })
    axios
      .get("/api/orphanages")
      .then(res => {
        this.setState({ orphanages: res.data });
      })
    axios
      .get("/api/centers")
      .then(res => {
        this.setState({ centers: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addHome = home => {
    axios.post("/api/homes", home).then(res => {
      const { homes, centers, orphanages } = this.state;
      this.setState({ homes: [...homes, res.data], centers: [...centers, res.data], orphanages: [...orphanages, res.data] });
      window.location.href = '/admin_homes'
    });
  };

  toggle = () => {
    const { toggleModal } = this.state;
    this.setState({ toggleModal: !toggleModal });
  };

  editHome = (id, home) => {
    axios.put(`api/homes/${id}`, { home }).then(res => {
      const homes = this.state.homes.map(home => {
        if (home.id === id) return res.data;
        return home;
      });
      this.setState({ homes });
      window.location.href = '/admin_homes'
    });
  };

  deleteHome = id => {
    axios.delete(`/api/homes/${id}`).then(res => {
      const { homes, } = this.state;
      this.setState({ homes: homes.filter(h => h.id !== id) });
      this.toggle();
    });
  };


  renderHomes() {
    const { homes } = this.state

    return (
      <div>
        {homes.map(home => {
          if (home.role === 'center') {
            this.setState({ centers: [...this.state.centers, home] })
            { this.renderCenters() }
          }

          if (home.role === 'orphanages') {

            this.setState({ orphanages: [...this.state.orphanages, home] })
            { this.renderOrphanages() }
          }
        }
        )}
      </div>
    )
  }

  renderOrphanages() {
    const { orphanages } = this.state;

    return (
      <div className='home-section-cont'>
        {orphanages.map(orphanage => (
          <div className="home-box">
          <Orphanage
            key={orphanage.id}
            {...orphanage}

            addHome={this.addHome}
            show={this.toggle}
            toggle={this.toggle}
            editHome={this.editHome}
            deleteHome={this.deleteHome}
            onHide={this.toggle}
            />
            </div>
            ))}
      </div>
    );
  }
  renderCenters() {
    const { centers } = this.state;
    
    return (
      <div className='home-section-cont'>
        {centers.map(center => (
          <div className="home-box">
          <Center
          key={center.id}
          {...center}
            show={this.toggle}
            toggle={this.toggle}
            editHome={this.editHome}
            deleteHome={this.deleteHome}
            onHide={this.toggle}
            />
            </div>
            ))}
      </div>
    );
  }
  render() {
    return (
      <div style={{paddingTop: '5em'}}>
        <h1 className="homes-title">Homes Page</h1>
        <AdminButtonCont>
          {/* <div className="home-btn-flex"> */}
            <AdminButton onClick={this.toggle}>
              Add New Home
            </AdminButton>
            <Link to='/admin'>
            <AdminButton  onClick={this.toggle} >
              Back
            </AdminButton>
            </Link>
          {/* </div> */}
        </AdminButtonCont>
        {this.state.toggleModal ? (
          <div className='center'> 
          <HomeModal 
          show={this.toggle} 
          addHome={this.addHome} 
          toggle={this.toggle} 
          onHide={ this.toggle } 
          toggleShow = { this.toggle }
          /> 
          </div>
        ) : (
            <div></div>
          )}
          <div>
          <div>
          <h1 className='homes-subtitle'>Orphanages</h1>
            {this.renderOrphanages()}
          </div>
          <div>
          <h1 className='homes-subtitle'>Centers</h1>
            {this.renderCenters()}
          </div>
          </div>
        {/* </AdminTitle> */}
      </div>
    );
  }
}

export default HomesMob;
