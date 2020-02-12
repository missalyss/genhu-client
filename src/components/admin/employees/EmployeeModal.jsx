import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import EmployeeForm from './EmployeeForm';
import '../homes/orphanages/HomeModal.css';


// const StaffModal = ({toggleShow, staffId}) => {
  class EmployeeModal extends React.Component {
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
              <Modal.Title>{this.props.firstName} {this.props.lastName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='modal-body-cont'>
              <EmployeeForm {...this.props}/>
              
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


export default EmployeeModal;