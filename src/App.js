import React, { Component } from 'react';
import ScrollToTop from './ScrollToTop';

import Home from './components/shared/Landing';
import Nomatch from './components/shared/Nomatch';
import FetchUser from './components/auth/FetchUser';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Switch, Route, } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import MyCalendar from './components/calendar/MyCalendar';
import Navbar from './components/shared/Navbar';
import NavMobile from './components/shared/navbar-mobile/NavMobile';
import About from './components/about/About';
import PolicyFinancial from './components/policyandfinancial/PolicyFinancial';
import Expeditions from './components/expeditions/Expeditions';
import Contact from './components/contact/Contact';
import ContactMobile from './components/contact/contact-mobile/ContactMobile'
import Orphanages from './components/orphanages/Orphanages';
import DropInCenters from './components/DropInCenter/DropInCenter';
import ShowOrphanages from './components/orphanages/ShowOrphanages';
import ShowCenters from './components/homes/centers/ShowCenters';

// Admin Imports
import Admin from './components/admin/Admin';
import Stats from './components/admin/stats/Stats';
import Staff from './components/staff/Staff';
import AdminHomes from './components/admin/homes/AdminHomes';
import Employees from './components/admin/employees/Employees'
import Privacy from './components/policyandfinancial/Privacy';
import ProvenSoulsPage from './components/shared/ProvenSoulsPage';
import Footer from './components/shared/Footer';


// ---------Mobile Pages --------------

import LandingMob from './components/shared/landing-mobile/LandingMob';
import NavModal from './components/shared/navbar-mobile/NavModal';
import AboutMobile from './components/about/AboutMobile';

import ExpeditionsMob from './components/expeditions/mobile/ExpeditionsMob';
import HomesMob from './components/homes/homes-mobile/HomesMob';
import ShowCentersMob from './components/homes/centers/mobile/ShowCenterMob';
import ShowOrphanageMob from './components/orphanages/show-orph-mobile/ShowOrphanageMob';

import FooterMob from './components/shared/landing-mobile/footer-mob/FooterMob';


// --------- Admin Mobile Pages ------------

import AdminHomeMob from './components/admin/admin-home-mob/AdminMob';
import AdminEmployeesMob from './components/admin/employees/admin-emp-mobile/AdminEmployeesMob';
import AdminHomesMob from './components/admin/homes/admin-homes-mob/AdminHomesMob';
import AdminStatsMob from './components/admin/stats/admin-stat-mobile/AdminStatsMob';


class App extends Component {
  state= {
    pageLoaded: false,
    width: window.innerWidth,
    menuLoaded: false,
    showNavModal: false,
  };

  toggleNavModal = () => {
    const { showNavModal } = this.state;
    this.setState({ showNavModal: !showNavModal });
  }

  toggleModal = () => {
    // const { menuLoaded } = this.state;
    this.setState({ menuloaded: !this.state.menuloaded })
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.handleWindowSizeChange);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  };

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { width, menuLoaded } = this.state
    const isMobile = width <= 600;

    if (isMobile) {
      return(
        <>
          <NavMobile toggleNavModal={this.toggleNavModal} showNavModal={this.state.showNavModal} />
          <NavModal
            showNavModal={this.state.showNavModal}
            toggleNavModal={this.toggleNavModal}
          />
          <ScrollToTop>

          <Route exact path="/" component={LandingMob} />
          <Route exact path='/staff' component={Staff} />
          <Route exact path='/about' component={AboutMobile} />
          <Route exact path='/contact' component={ContactMobile} />

          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/register" component={RegisterMob} /> */}
          {/* <Route exact path="/calendar" component={MyCalendarMob} /> */}
          {/* <Route exact path='/about' component={AboutMob} /> */}
          {/* <Route exact path='/policy' component={PolicyFinancialMob} /> */}
          <Route exact path='/expeditions' component={ExpeditionsMob} />
          {/* <Route exact path='/contact' component={ContactMob} /> */}
          {/* <Route exact path='/staff' component={StaffMob} /> */}
          {/* <Route exact path='/orphanages' component={OrphanagesMob} /> */}
          <Route exact path='/homes' component={HomesMob} />
          <Route exact path='/orphanages/:id' component={ShowOrphanageMob} />
          <Route exact path='/centers/:id' component={ShowCentersMob} />
          {/* <Route exact path='/privacy' component={ PrivacyMob } /> */}
          {/* <Route exact path='/proven_souls' component={ ProvenSoulsPageMob } /> */}
          {/* <FetchUser> */}
          <ProtectedRoute exact path="/admin" component={AdminHomeMob} />
          <ProtectedRoute exact path="/datastats" component={AdminStatsMob} />
          <ProtectedRoute exact path="/admin_homes" component={AdminHomesMob} />
          <ProtectedRoute exact path="/admin_employee" component={AdminEmployeesMob} />
          {/* </FetchUser> */}
          {/* <Route component={NomatchMob} /> */}
      {/* </Switch> */}
          </ScrollToTop>
        <FooterMob />
        </>
      );
    } else {
      return (
        <>
          <Navbar />
            <Switch>
              <ScrollToTop>

              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/calendar" component={MyCalendar} />
              <Route exact path='/about' component={About} />
              <Route exact path='/policy' component={PolicyFinancial} />
              <Route exact path='/expeditions' component={Expeditions} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/staff' component={Staff} />
              <Route exact path='/orphanages' component={Orphanages} />
              <Route exact path='/drop_in_centers' component={DropInCenters} />
              <Route exact path='/orphanages/:id' component={ShowOrphanages} />
              <Route exact path='/centers/:id' component={ShowCenters} />
              <Route exact path='/privacy' component={ Privacy } />
              <Route exact path='/proven_souls' component={ ProvenSoulsPage } />
              </ScrollToTop>
            </Switch>
            <Footer/>
        </>
      )
    }
  }
};

export default App;
