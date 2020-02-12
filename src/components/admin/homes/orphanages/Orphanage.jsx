import React, { useState } from "react";
import { AdminSubTitle, AdminData, AdminButtonMob, AdminButtonCont } from "../../Styles";
import HomeForm from "../AdminHomeForm";
import '../Homes.css';
import HomeModal from './HomeModal';


const Orphanage = ({ show, onHide, editHome, id, deleteHome, ...orest }) => {
  const [toggleModal, setToggleModal] = useState(false);

  const toggle = () => setToggleModal(!toggleModal);

  return (
   
    <div className="single-stat-home">
      <div className="stat-data-mob">
        <AdminSubTitle>Orphanage Name: </AdminSubTitle>
        <AdminData> {orest.name}</AdminData>
      </div>
      <AdminButtonCont>
        <AdminButtonMob onClick={toggle}>Edit</AdminButtonMob>
        <AdminButtonMob
          style={{ backgroundColor: "#863A2A" }}
          onClick={() => deleteHome(id)}
        >
          Delete
        </AdminButtonMob>
      </AdminButtonCont>
      {toggleModal ? (
        <HomeModal
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

export default Orphanage;
