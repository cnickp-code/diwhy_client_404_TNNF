import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
     render() {
          return (
               <footer className='App_Footer'>
                    <ul className='Footer_List'>
                         {/* Links to various legal/info-based pages, will expand upon in the future.*/}
                         <Link to='/about' className='Desktop_Footer_Item'>About</Link>
                         <Link to='/help' className='Desktop_Footer_Item'>Help</Link>
                         <Link to='/terms' className='Desktop_Footer_Item'>Terms Of Service</Link>
                         <Link to='/privacy' className='Desktop_Footer_Item'>Privacy</Link>
                         <Link to='/' className='Mobile_Footer_Item'>Home</Link>
                         <Link to='/create' className='Mobile_Footer_Item'>Create New</Link>
                         <Link to='/login' className='Mobile_Footer_Item'>Log Out</Link>
                    </ul>
               </footer>
          );
     };
};