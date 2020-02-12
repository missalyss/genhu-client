import React, { useState } from "react";
import { AdminSubTitle, AdminData, AdminButtonMob, AdminButtonCont } from "../../Styles";
import HomeFormMob from "./admin-form-mob/AdminHomeFormMob";
import HomeModalMob from './HomeModalMob';

const Center = ({ show, onHide, editHome, id, deleteHome, addHome, ...orest }) => {
  const [toggleModal, setToggleModal] = useState(false);

  // const editToggle = () => setToggleEdit(!toggleEdit);

  const toggle = () => setToggleModal(!toggleModal);
   

  return (
    <div className="single-stat-home-mob" >
      <div className="stat-data-mob ">
        <AdminSubTitle>Center Name: </AdminSubTitle>
        <AdminData> {orest.name}</AdminData>
      </div>
      <div className="button-cont-stat">
        <AdminButtonMob onClick={toggle}>Edit</AdminButtonMob>
        <AdminButtonMob
          style={{ backgroundColor: "#863A2A" }}
          onClick={() => deleteHome(id)}
        >
          Delete
        </AdminButtonMob>
      </div>
      {toggleModal ? (
        <HomeModalMob
          addHome={addHome}
          show={show} 
          onHide={ toggle } 
          toggleShow = { toggle }
          editHome={editHome}
          editToggle={toggle}
          {...orest}          
          id={id}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Center;
