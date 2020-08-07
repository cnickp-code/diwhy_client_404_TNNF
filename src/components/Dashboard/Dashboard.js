import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import DashContext from '../../contexts/DashContext'
// import Watch from '../Watch/Watch'
// import {} from '../Util/Util'
import NavBar from './Header/NavBar'
import './Dashboard.css'

class Dashboard extends Component {
    // static contextType = DashContext;

    render() {
        return (
            <div className='dash-wrapper'>
                <NavBar />
                <section className='profile-sidebar'>
                    <h2>Profile Sidebar</h2>
                </section>
                <section className='feed'>
                    <h2>Feed</h2>
                    
                </section>
                <section className='watch-list'>
                    <h2>Watch List</h2>
                    {/* <Watch /> */}
                </section>
            </div>
        )
    }
}

export default Dashboard