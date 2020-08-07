import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
     render() {
          return (
               <div className='DIWHY_NavBar'>
                    <Link to='/browse' className='Desktop_NavBar_Item'>Browse</Link>
                    <Link to='/helpwanted' className='Desktop_NavBar_Item'>Help Wanted</Link>
                    <Link to='/profile' className='Desktop_NavBar_Item'>Profile</Link>
                    {/* <Link to='/inbox' className='Desktop_NavBar_Item'>Inbox</Link> */}
               </div>
          )
     }
}