import React from 'react';
// import { Link } from 'react-router-dom';
import './Footer.css'

export default class Footer extends React.Component {

     // renderDesktop() {
     //      return (
     //           <nav className='foot-nav'>
     //                <Link to='/' className='Desktop_Footer_Item'>Home</Link>
     //                <Link to='/about' className='Desktop_Footer_Item'>About</Link>
     //                <Link to='/help' className='Desktop_Footer_Item'>Help</Link>
     //                <Link to='/terms' className='Desktop_Footer_Item'>Terms Of Service</Link>
     //           </nav>
     //      )
     // }

     // renderMobile() {
     //      return (
     //           <nav className='foot-nav'>
     //                <Link to='/' className='Mobile_Footer_Item'>Home</Link>
     //                <Link to='/create' className='Mobile_Footer_Item'>Create New</Link> 
     //                <Link to='/login' className='Mobile_Footer_Item'>Log Out</Link>
     //           </nav>
     //      )
     // }

     renderLoggedOut() {
          return (
               <p>D I W H Y © 2020</p>
          )
     }

     render() {
          return (
               <footer className='App_Footer'>
                    {/* {TokenService.hasAuthToken()
                         ? this.renderLoggedInFooter()
                         : this.renderLoggedOut()} */}
                         {this.renderLoggedOut()}
               </footer>
          );
     };
};