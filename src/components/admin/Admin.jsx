import React from "react";
import AdminNav from "./AdminNav";
import "./AdminHome.css";
import { AdminTitle, AdminButton } from './Styles';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div>
      <AdminNav />
      <div className="admin-container">
        <div className="admin-title"><AdminTitle >GenHu Admin Home</AdminTitle></div>

        <div className='papa'>

          <div className="button-col-one">
            <div className="row-one">
              <Link to='/datastats'>
               <AdminButton>Stats Page</AdminButton>
              </Link>
              <Link to='/admin_employee'>
               <AdminButton>Employees Page</AdminButton>
              </Link>
              <Link to='/admin_homes'>
                <AdminButton>Homes</AdminButton>
              </Link>
            </div>
        </div>
          <div className="button-col">
            <div className="row-one">
              <AdminButton>Events Page</AdminButton>
              <AdminButton>Calendar Page</AdminButton>
            <Link to='/login'>
              <AdminButton>Log Out</AdminButton>
              </Link>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
