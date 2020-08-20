import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import AppContext from '../../contexts/AppContext'
import subheader from '../../image-assets/sub-header-small.png'
import './Header.css'

class Header extends Component {

  static contextType = AppContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLoggedInNav() {
    return (
      <header className='header-in'>
        <nav className='head-nav-logged-in'>
          <Link className='app-sub' to='/'><img src={subheader} className='sub-header' alt='logo' /></Link>
          <Link className='hw-head-link' to='/wanted'>Help Wanted</Link>
          <Link className='logout-head' onClick={this.handleLogoutClick} to='/login'>Logout</Link>
        </nav>
      </header>
    )
  }

  renderLoginLink() {
    return (
      <header className='header-out'>
      </header>
    )
  }

  render() {
    return (
      <>
        {TokenService.hasAuthToken()
          ? this.renderLoggedInNav()
          : this.renderLoginLink()}
      </>
    );
  }
}

export default Header