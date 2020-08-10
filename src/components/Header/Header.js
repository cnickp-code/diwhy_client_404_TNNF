import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

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