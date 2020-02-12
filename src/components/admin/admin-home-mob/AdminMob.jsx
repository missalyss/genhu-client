import React from "react";
// import AdminNav from "./AdminNav";
import NavMobile from '../../shared/navbar-mobile/NavMobile'
import "./AdminHomeMob.css";
import { AdminTitle } from '../Styles';
import { Link } from 'react-router-dom';

const AdminHomeMob = () => {
  return (
    <div>
      {/* <AdminNav /> */}
      <NavMobile />
      <div className="admin-container-mob">
        <div className="admin-title-mob"><AdminTitle >GenHu Admin Home</AdminTitle></div>

        <div className='papa-mob'>

          {/* <div className="button-col-one-mob"> */}
            <div className="row-one-mob">
              <Link to='/datastats'>
              <button >Stats</button>
              </Link>
              <Link to='/admin_employee'>
              <button>Employees</button>
              </Link>
            <Link to='/admin_homes'>
              <button>Homes</button>
              </Link>
            </div>
        {/* </div> */}
          {/* <div className="button-col-mob"> */}
            <div className="row-one-mob">
              <Link to=''>
                <button>Events</button>
              </Link>
              <Link to=''>
                <button>Calendar</button>
              </Link>
            <Link to='/login'>
              <button>Log Out</button>
              </Link>
            </div>
        {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminHomeMob;
