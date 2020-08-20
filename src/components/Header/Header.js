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
          <Link className='app-sub' to='/'><img src={subheader} alt='logo'/></Link>
          <Link to='/wanted' className='Desktop_NavBar_Item'>Help Wanted</Link>
          <Link to='/profile' className='Desktop_NavBar_Item'>Profile</Link>
          <Link onClick={this.handleLogoutClick} to='/login'>Logout</Link>

          {/* <Link to='/profile' className='Mobile_NavBar_Item'>Profile</Link>
          <MobileNavInput />
          <Link to='/wanted' className='Mobile_NavBar_Item'>HW</Link> */}
          {/*  ^ will be hidden by media query (display: none) */}
        </nav>
      </header>
    )
  }

  renderLoginLink() {
    return (
      <header className='header-out'>
        <nav className='head-nav-logged-out'>
          <Link id='left-log' className='out-link' to='/login'>Login</Link>
          <Link className='out-link' to='/register'>Sign up</Link>
        </nav>
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