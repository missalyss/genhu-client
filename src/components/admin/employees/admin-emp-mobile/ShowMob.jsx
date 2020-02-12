import React, { useState } from "react";
import { AdminSubTitleMob, AdminButtonMob, AdminButtonCont,  } from "../../Styles";
import EmployeeFormMob from "./EmployeeFormMob";
import EmployeeModalMob from './EmployeeModalMob';
const defaultImage = 'http://www.tolmayenterprises.com/images/Person.png';
// import { Trash } from '../../../assets/Icons/TrashIcon.png'

const ShowMob = ({ first_name, last_name, bio, title, email, phone, other, role, image, editEmployee, id, deleteEmployee }) => {
  const [toggleEdit, setToggleEdit] = useState(false);

  const editToggle = () => setToggleEdit(!toggleEdit);

  return (
    <div>
      <div>
        <AdminSubTitleMob className='center'>Name: {first_name} {last_name} </AdminSubTitleMob>
      </div>
        <div>
        <AdminSubTitleMob className='center'>Title: {title}</AdminSubTitleMob>
      </div>
        <div>
        <AdminSubTitleMob className='center'>Role: {role}</AdminSubTitleMob>
      </div>
      <br />
      <div>
        <img className='employee_photo' src={image || defaultImage} />
      </div>
      <AdminButtonCont>
        <AdminButtonMob onClick={editToggle}>Edit</AdminButtonMob>
        <AdminButtonMob
          style={{ backgroundColor: "#863A2A" }}
          onClick={() => deleteEmployee(id)}
        >
          Delete
        </AdminButtonMob>
      </AdminButtonCont>
      {toggleEdit ? (
        <EmployeeModalMob
          show={editToggle}
          onHide={editToggle}
          editEmployee={editEmployee}
          editToggle={editToggle}
          firstName={first_name}
          lastName={last_name}
          email={email}
          phone={phone}
          role={role}
          title={title}
          bio={bio}
          image={image}
          other={other}
          id={id}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ShowMob;
