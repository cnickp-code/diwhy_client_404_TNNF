import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
     render() {
          return (
               <div className='DIWHY_NavBar'>
                    <Link to='/home' className='Desktop_NavBar_Item'>Home</Link>
                    <Link to='/helpwanted' className='Desktop_NavBar_Item'>Help Wanted</Link>
                    <Link to='/edit' className='Desktop_NavBar_Item'>Edit Profile</Link>
                    {/* <Link to='/inbox' className='Desktop_NavBar_Item'>Inbox</Link> */}
               </div>
          )
     }
}