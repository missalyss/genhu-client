import React from "react";
import axios from "axios";
import EmployeeFormMob from "./EmployeeFormMob";
// import {AdminTitle} from "../Styles";
import ShowMob from "./ShowMob";
import './AdminEmployeesMob.css'
import { Link } from 'react-router-dom';
import EmployeeModalMob from './EmployeeModalMob';
import { AdminButtonMob, AdminButtonCont } from "../../Styles";

class AdminEmployeesMob extends React.Component {
  state = { employees: [], volunteers: [], directors: [], staff: [], toggleModal: false };

  componentDidMount() {
    axios
      .get("/api/employees")
      .then(res => {
        this.setState({ employees: res.data });
      })
      axios
        .get("/api/volunteers")
        .then(res => {
          this.setState({ volunteers: res.data });
        })
      axios
        .get("/api/directors")
        .then(res => {
          this.setState({ directors: res.data });
        })
      axios
        .get("/api/staff")
        .then(res => {
          this.setState({ staff: res.data });
        })
      .catch(err => {
        console.log(err);
      });

  }

  addEmployee = (employee) => {
    console.log(employee)
    let data = new FormData();
    Object.keys(employee).forEach(key => {
      if(!employee[key] || employee[key] === ''){
        return;
      }
      data.append(key, employee[key])
    });
    axios.post("/api/employees", data).then(res => {
      const { employees, } = this.state;
      this.setState({ employees: [...employees, res.data] });
      // this.setState({ employees: [...employees, res.data], staff: [...staff, res.data], volunteers: [...volunteers, res.data], directors: [...directors, res.data] });
      // would need to pass staff, volunteers, and directors in the const as well
      this.toggle();
    });
  };

  toggle = () => {
    const { toggleModal } = this.state;
    this.setState({ toggleModal: !toggleModal });
  };

  editEmployee = (id, employee) => {
    console.log(employee)
    let data = new FormData();
    Object.keys(employee).forEach(key => {
      if(!employee[key] || employee[key] === ''){
        return;
      }
      data.append(key, employee[key])
    });
    // Object.keys(employee).forEach(key => data.append(key, employee[key]));
    axios.put(`api/employees/${id}`, data).then(res => {
      const employees = this.state.employees.map(employee => {
        if (employee.id === id) {
          return res.data;
        } else {
          return employee;
        }
      });
      this.setState({ employees });
    })  
  }

  deleteEmployee = (id) => {
    axios.delete(`/api/employees/${id}`).then(res => {
      const { employees } = this.state;
      this.setState({ employees: employees.filter(e => e.id !== id) });
    });
  };

  renderShow() {
    const volunteers = this.state.employees.filter(e => e.role === 'volunteer');
    const directors = this.state.employees.filter(e => e.role === 'director');
    const staff = this.state.employees.filter(e => e.role === 'staff');

    return(
      <div>
        <h3 className='employee-title-mob'>Staff</h3>
        <div className='employees-container-mob'>
        { staff.map(s => (
          <div key={ s.id } className='employee-box-mob'>
          <ShowMob
            key={ s.id }
            { ...s }
            editEmployee = { this.editEmployee }
            deleteEmployee = { this.deleteEmployee }
          />
          </div>
        ))}
        </div>

        <h3 className='employee-title-mob'>Volunteers</h3>
        <div className='employees-container-mob'>
        { volunteers.map(v => (
          <div key={ v.id } className='employee-box-mob'>
          <ShowMob
            key={ v.id }
            { ...v }
            editEmployee = { this.editEmployee }
            deleteEmployee = { this.deleteEmployee }
          />
          </div>
        ))}
        </div>

        <h3 className='employee-title-mob'>Directors</h3>
        <div className='employees-container-mob'>
        { directors.map(d => (
          <div key={ d.id } className='employee-box-mob'>
          <ShowMob
            key={ d.id }
            { ...d }
            editEmployee = { this.editEmployee }
            deleteEmployee = { this.deleteEmployee }
          />
          </div>
        ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='employee-edit-page-mob'>
        <div className='emp-page-heading-mob'>
          <h1 >Employees Page</h1>
        </div>
        <div className='emp-btn-flex'>
        <div className='employee-buttons-mob'>
        <AdminButtonCont>
          <AdminButtonMob onClick={this.toggle} >
            Add New Employee
          </AdminButtonMob>
        <Link to='/admin'>
          <AdminButtonMob onClick={this.toggle} >
            Back
          </AdminButtonMob>
         </Link>
        </AdminButtonCont>
         </div>
        </div>
        {this.state.toggleModal ? (
          <div> <EmployeeModalMob show={this.toggle} onHide={this.toggle} toggleShow={this.toggle} addEmployee={this.addEmployee}/> </div>
        ) : (
          <div></div>
        )}
        {this.renderShow()}
      </div>
    );
  }
}

export default AdminEmployeesMob;