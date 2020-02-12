import React, { Component } from 'react';
import Logo from "../../assets/Images/GENHU-logo-fake.png";
import styles from'../shared/Main.css';
import Footer from '../shared/Footer';

class Contact extends Component {

  successMessage = () => {
    alert("Thank you for your submission! A member of our team will be in contact with you shortly.")
  }

  render() {
    return (
      
      <>
      <div className='contact'>
      <div className='contact_left'>
      <img src={Logo} className='contact_logo' alternate='logo'/>
      <div className='address_info'>
      <p>2607 Casto Lane,</p>
      <p>Salt Lake City, Utah 84117</p>
      <p>Phone: +1 801-859-1033</p>
      <p>E-mail: van@genhu.org</p>
      <p>Website: www.genhu.org</p>
      </div>
      </div>
      <div className='contact_right'>
        <form className='contact_form'>
        <h2>We're ready to help!</h2>
        <br />
        <div className='contact_items'>
        <div className='contact_item'>
        <label>Name</label>
        <input name='name' />
        </div>
        <div className='contact_item'>
        <label>Email</label>
        <input type='email' name='email' />
        </div>
        <div className='contact_item'>
        <label>Subject</label>
        <input name='subject' />
        </div>
        <div className='contact_item'>
        <label>Message</label>
        <textarea name='message' />
        </div>
        <div>
          <button type='submit' className='contact_submit' onClick={ this.successMessage }>Send Message</button>
        </div>
        </div>
        </form>
      </div>
      </div>
      </>
      
  
    )
  }
}

export default Contact;