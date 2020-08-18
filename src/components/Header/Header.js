import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import AppContext from '../../contexts/AppContext'
import './Header.css'

class Header extends Component {


  static contextType = AppContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLoggedInNav() {
    return (
      <nav className='head-nav'>
        <Link to='/browse' className='Desktop_NavBar_Item'>Browse</Link>
        <Link to='/wanted' className='Desktop_NavBar_Item'>Help Wanted</Link>
        <Link to='/profile' className='Desktop_NavBar_Item'>Profile</Link>
        <Link onClick={this.handleLogoutClick} to='/login'>Logout</Link>

        {/* <Link to='/profile' className='Mobile_NavBar_Item'>Profile</Link>
        <MobileNavInput />
        <Link to='/wanted' className='Mobile_NavBar_Item'>HW</Link> */}
        {/*  ^ will be hidden by media query (display: none) */}
      </nav>
    )
  }

  renderLoginLink() {
    return (
      <nav className='head-nav'>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header>
        <Link className='app-name' to='/' />
        <div className='app-sub'></div>
        {TokenService.hasAuthToken()
          ? this.renderLoggedInNav()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header