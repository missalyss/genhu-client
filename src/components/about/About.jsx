import React, { Component } from 'react';
import Footer from '../shared/Footer';
import AboutUs from "./AboutUs.css";
import { NavLink, Link, Redirect} from "react-router-dom";


class About extends Component {
  render() {
    return (
      <div>
      <div class='aboutUs-container'>
        <div class='au-container-top'>
          <h1>About Us</h1>
          <br />
          <p>Genhu is a team of loving, charitable, 
            educated, and dedicated men and women who care about changing the lives of others. 
            Some volunteer their time, others are paid.</p>

            <ul class='list-style'>
            
              <NavLink to='/staff'><li>Board of Directors</li></NavLink>
              <NavLink to='/staff'><li>Management & Staff</li></NavLink>
              <NavLink to='/staff'><li>Volunteers</li></NavLink>
            </ul>
            <br/>
          </div>
          <div class='au-container'>
          <h4 >VISION</h4>
          <p>Generations Humanitarian envisions a world without street children.</p>
          <br/>
          </div>
            <div class='au-container'>
              <h4>MISSION</h4>
              <p>Generations Humanitarian is committed to transform street children toward an abundance of health, 
                hope, and loving homes—thereby breaking the cycle of scarcity for generations to come. 
                This is done through broad research, novel development, strengthening nonprofit entities in development, 
                and individual nurturing in a home environment.
              </p>
              <br/>
            </div>
            <div class='au-container'>
              <h4>MANDATES</h4>
              <p>We are mandated by regulatory agencies of the U.S. 
                to create public value and insure the common good is advanced. 
                We will comply with accounting and regulatory requirements. 
                As we develop our alliances with government agencies and other actors in the field, 
                we are aware that some mandates may be set forth.</p>
                <br/>
            </div>
            <div class='au-container'>
              <h4>BELIEFS</h4>
              <ul class='list-style'>
              <li>We believe all children should grow up in a home with goodly, loving parents who provide for their physical, emotional, and spiritual needs.</li>
              <li>We believe that street children are resilient and given opportunities and love, they can transform their own lives and become productive adults and rear happy families.</li>
              <li>We believe in being subject to the sovereign power of the nations wherein we work and respect their political philosophies and forms of government.</li>
              <li>We believe we have the right, however, to advocate for street children in any adversarial context provided we do so within the legal system of those countries and with its own citizens.</li>
              <li>We believe that rigorous research helps bridge the gap between theory and praxis, especially in the field (foreign nations where we house children).</li>
              <li>Latin American countries are Christian nations without a strong custom of separation of church and state. We hold a holistic ideology and believe spirituality is a necessary part of one’s wellbeing. 
                We are faith-based to the extent that we share the belief in Christian ideals and promote them to the children. 
                Other than professing a belief in Jesus Christ and his teachings, we do not permit our mission to coerce street children toward any religious institution, thereby respecting their right to self-determination.
              </li>
            </ul>
            <br/>
          </div>
          <div>
              <h4>VALUES</h4>
              <p>Genhu does not participate in “turf wars” and we don’t view the world through the lens of scarcity. We are abundance minded. We strive to be:</p>
              <ul class='list-style'>
              <li>Loving</li>
              <li>Culturally Sensitive</li>
              <li>Collaborative</li>
              <li>Accountable</li>
              <li>Open and Transparent</li>
            </ul>
            <br />
          </div>
          </div>
        </div>
      
      
    )
  }
}

export default About;