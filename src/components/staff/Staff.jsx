import React from 'react';
import axios from 'axios';
import Footer from '../shared/Footer';
import { Link } from 'react-router-dom';
import './Staff.css';
import StaffModal from './StaffModal';
// import StaffShow from './StaffShow';
// import DirectorShow from './DirectorShow';
// import VolunteerShow from './VolunteerShow';
import EmployeeShow from './EmployeeShow';


class Staff extends React.Component {
  
  state = { directors: [], volunteers: [], staff: [], toggleForm: false, toggleModal: false, };

  componentDidMount() {
    axios
      .get("/api/staff")
      .then(res => {
        this.setState({ staff: res.data });
      })
    axios
      .get("/api/directors")
      .then(res => {
        this.setState({ directors: res.data });
      })
    axios
      .get("/api/volunteers")
      .then(res => {
        this.setState({ volunteers: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  toggle = () => {
    const { toggleModal } = this.state;
    this.setState({ toggleModal: !toggleModal });
  };

  renderEmployee() {

    const { staff, volunteers, directors } = this.state;
    return (
      <div>
      <div className='bump_nav'>
        <div className='main_headers'>
          <h1>Directors</h1>
        </div>
        <div className='staff-container'>
        { directors.map(d => (
          <EmployeeShow
            key = { d.id } 
            {...d}
          />
        ))}
        </div>
      </div>
      <div>
        <div className='main_headers'>
          <h1>Volunteers</h1>
        </div>
        <div className='staff-container'>
        { volunteers.map(v => (
          <EmployeeShow
            key = { v.id } 
            {...v}
          />
        ))}
        </div>
      </div>
      <div>
      <div className='main_headers'>
          <h1>Staff</h1>
        </div>
        <div className='staff-container'>
        { staff.map(s => (
          <EmployeeShow
            key = { s.id } 
            {...s}
          />
        ))}
        </div>
      </div>
      </div>
        );

  }

  render () {
    return (

      <div className='employee_page'>
        <div>
          <StaffModal />
        </div>
        <div>
          {this.renderEmployee()}
          </div>
        <br/>
      </div>
    )
  }

}

export default Staff;
