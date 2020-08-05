import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
     render() {
          return (
               <footer className='App_Footer'>
                    <ul className='Footer_List'>
                         {/* Links to various legal/info-based pages, will expand upon in the future.*/}
                         <Link to='/about' className='Footer_Item'>About</Link>
                         <Link to='/help' className='Footer_Item'>Help</Link>
                         <Link to='/terms' className='Footer_Item'>Terms Of Service</Link>
                         <Link to='/privacy' className='Footer_Item'>Privacy</Link>
                    </ul>
               </footer>
          );
     };
};