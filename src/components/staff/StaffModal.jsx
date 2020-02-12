import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './StaffModal.css';


// const StaffModal = ({toggleShow, staffId}) => {
  class StaffModal extends React.Component {
    constructor(props){
      super(props);
    }
    

    render() {
      return (
        <div >
           <Modal 
          className = 'modal-container'
          center
          autoFocus
            {...this.props}
            size='lg'
          >
            <Modal.Header className = 'modal-header'>
              <div className='modal-col'>
              <Modal.Title >{this.props.firstName} {this.props.lastName} </Modal.Title>
              {this.props.email}
              </div>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='modal-body-cont'>
              <Modal.Title>Bio</Modal.Title>  
              {this.props.bio}
              {/* <Modal.Title>Phone</Modal.Title> */}
              
              </div>
              </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' className='modal-button' onClick={this.props.onHide}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
  }
}


export default StaffModal;