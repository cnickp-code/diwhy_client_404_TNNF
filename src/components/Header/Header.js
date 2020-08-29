import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../Services/token-service';
import AppContext from '../../contexts/AppContext';
import subheader from '../../image-assets/sub-header-small.png';
import header from '../../image-assets/header-full-small.png';
import './Header.css';

export default class Header extends Component {

  static contextType = AppContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLoggedInNav() {
    const { user } = this.context;
    return (
      <header className='header-in'>
        <nav className='head-nav-logged-in'>
          <Link className='app-sub' to='/'><img src={subheader} className='sub-header' alt='logo' /></Link>
          <Link className='app-head-logo' to='/'><img src={header} className='app-head-logo' alt='logo' /></Link>
          <Link className='hw-head-link' to='/wanted'>Help Wanted</Link>
          <a className='hw-head-link' href={`/profile/${user.user_name}`}>Profile</a>
          <Link className='logout-head' onClick={this.handleLogoutClick} to='/welcome'>Logout</Link>
        </nav>
      </header>
    );
  };

  renderLoginLink() {
    return (
      <header className='header-out'>
      </header>
    );
  };

  render() {
    return (
      <>
        {TokenService.hasAuthToken()
          ? this.renderLoggedInNav()
          : this.renderLoginLink()}
      </>
    );
  };
};