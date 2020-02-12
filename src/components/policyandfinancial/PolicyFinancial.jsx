import React, { Component } from 'react';
import Footer from '../shared/Footer';
import PolicyFinancial from './PolicyFinancial.css';

class Policy extends Component {
  render() {
    return (
      <div>
      <div class='policy-container'>
        <div class='pf-container-top'>
          <h1>Policy and Financial</h1>
          <br />
          <h4>IRS EXEMPTION LETTER</h4>
          <br />
          <p>Generations Humanitarian (Genhu) is a 501(c)(3) public charity [170 (b)(1)(A)(vi)] organization incorporated in the State of Utah.  Read exemption letter here:  <a href= 'https://genhu.org/wp-content/uploads/2016/12/501c3-2-pages.pdf' target="_blank">  501c3-2 pages</a></p>
          <br/>
          </div>
          <div class='pf-container'>
          <h4 >Charitable Solicitations Permit</h4>
          <p><a href='https://genhu.org/wp-content/uploads/2018/06/Charitable-solicitations-permit2018.pdf' target="_blank">Charitable Solicitations Permit</a></p>
          <br/>
          </div>
            <div class='pf-container2'>
              <h4>CONFLICT OF INTEREST POLICY</h4>
              <p>For Board of Directors. Read it here:  <a href= 'https://genhu.org/wp-content/uploads/2016/12/GenhuConflictofInterestPolicy.pdf' target="_blank"> Conflict of Interest Policy</a></p>
              <br/>
            </div>
            <div class='pf-container2'>
              <h4>FORM 990s</h4>
              <ul class='list-style'>
              <a href= 'https://genhu.org/wp-content/uploads/2016/12/Genhu-2012-990.pdf' target="_blank" ><li>2012</li></a>
              <a href= 'https://genhu.org/wp-content/uploads/2016/12/2013-Form990.pdf' target="_blank"><li>2013</li></a>
              <a href= 'https://genhu.org/wp-content/uploads/2017/01/GENERATIONSHUMANITARIAN_990_2014.pdf' target="_blank"><li>2014</li></a>
              <a href= 'https://genhu.org/wp-content/uploads/2017/01/GENERATIONSHUMANITARIAN990-2015.pdf' target="_blank"><li>2015</li></a>
              <a href= 'https://genhu.org/wp-content/uploads/2017/04/Genhu-Return-Year-ending-2016.pdf' target="_blank"><li>2016</li></a>
              <a href= 'https://genhu.org/wp-content/uploads/2018/09/GENERATIONSHUMANITARIANCopy1.pdf' target="_blank"><li>2017</li></a>
              <br/>
            </ul>
            <br />
            </div>
            </div>
        </div>
 
    )
  }
}

export default Policy;