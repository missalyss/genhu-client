import React from "react";
import axios from "axios";
import OrphanageMob from "./OrphanageMob";
import CenterMob from "./CenterMob";
// import AdminHomeFormMob from "./AdminHomeFormMob";
import { AdminTitle, AdminSubTitle, AdminButtonMob, AdminButtonCont } from "../../Styles";
import "../../stats/AdminStats.css";
import { Link } from 'react-router-dom';
import HomeModalMob from './HomeModalMob';
import '../../../staff/StaffModal.css';
import '../../employees/admin-emp-mobile/AdminEmployeesMob.css'

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
      this.toggle();
    });
  };

  deleteHome = id => {
    axios.delete(`/api/homes/${id}`).then(res => {
      const { homes, } = this.state;
      this.setState({ homes: homes.filter(h => h.id !== id) });
      window.location.href = '/admin_homes'

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
      <div className='home-section-cont-mob'>
        {orphanages.map(orphanage => (
          <div className="home-box-mob">
          <OrphanageMob
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
      <div className='home-section-cont-mob'>
        {centers.map(center => (
          <div className="home-box-mob">
          <CenterMob
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
      <div style={{paddingTop: '2em'}}>
        <h1 className="emp-page-heading-mob">Homes Page</h1>
        <AdminButtonCont>
          <AdminButtonMob onClick={this.toggle}>
            Add Home
          </AdminButtonMob>
          <Link to='/admin'>
          <AdminButtonMob onClick={this.toggle} >
            Back
          </AdminButtonMob>
          </Link>
        </AdminButtonCont>
        {this.state.toggleModal ? (
          <div className='center'> 
          <HomeModalMob 
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
          <h1 className='employee-title-mob'>Orphanages</h1>
            {this.renderOrphanages()}
          </div>
          <div>
          <h1 className='employee-title-mob'>Centers</h1>
            {this.renderCenters()}
          </div>
          </div>
        {/* </AdminTitle> */}
      </div>
    );
  }
}

export default HomesMob;
