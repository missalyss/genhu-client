import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import AdminHomeFormMob from './admin-form-mob/AdminHomeFormMob';
import './HomeModalMob.css';


// const StaffModal = ({toggleShow, staffId}) => {
  class HomeModalMob extends React.Component {
    constructor(props){
      super(props);
    }
    

    render() {
      return (
        <div >
           <Modal 
          className = 'home-modal-cont'
          center
          autoFocus
          scrollable
            {...this.props}
            size='md'
          >
            <Modal.Header className = 'modal-header'>
              <div className='modal-col'>
              
              
              </div>
              <Modal.Title>{this.props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='modal-body-cont'>
              <AdminHomeFormMob {...this.props}/>
              
              </div>
              </Modal.Body>
            <Modal.Footer>
              <Button variant='primary' className='modal-button' onClick={this.props.onHide}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
  }
}


export default HomeModalMob;