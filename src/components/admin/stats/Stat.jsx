import React, { useState } from "react";
import { AdminSubTitle, AdminData, AdminButtonMob, AdminButtonCont } from "../Styles";
import StatForm from "./StatForm";
import AdminStatsModal from './AdminStatsModal';
// import { Trash } from '../../../assets/Icons/TrashIcon.png'

const Stat = ({ onHide, name, value, editStat, id, priority, deleteStat, show, ...stat }) => {
  const [toggleModal, setToggleModal] = useState(false);

  const toggle = () => setToggleModal(!toggleModal);

  return (
    <div className="single-stat">
      <div className="stat-data">
        <AdminSubTitle>Stat Name: </AdminSubTitle>
        <AdminData> {name}</AdminData>
      </div>
      <div className="stat-data">
        <AdminSubTitle> Stat Value: </AdminSubTitle>
        <AdminData> {value}</AdminData>
      </div>
      <AdminButtonCont>
        <AdminButtonMob onClick={toggle} style={{ borderRadius: '5px'}}>Edit</AdminButtonMob>
        <AdminButtonMob
          style={{ backgroundColor: "#863A2A", borderRadius: '5px' }}
          onClick={() => deleteStat(id)}
        >
          Delete
        </AdminButtonMob>
      </AdminButtonCont>
      {toggleModal ? (
        <AdminStatsModal 
          editStat={editStat} 
          statname={name}
          onHide={ toggle } 
          statName={name}
          statValue={value}
          priority={priority}
          show={show} 
          toggleShow = { toggle }
          editToggle={toggle}
          {...stat}          
          id={id}

          /> 
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Stat;
