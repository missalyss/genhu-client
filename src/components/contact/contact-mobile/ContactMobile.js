import React, { Component } from 'react';
import Contact from '../Contact'
import styles from './ContactMobileStyles.css';

class ContactMobile extends Component {
  render () {
    return (
      <div className='mobile-contact'>
        <Contact />
      </div>
    )
  }
}

export default ContactMobile;