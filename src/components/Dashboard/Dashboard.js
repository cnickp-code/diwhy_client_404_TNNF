import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import DashContext from '../../contexts/DashContext'
import Watch from '../Watch/Watch'
// import {} from '../Util/Util'
import NavBar from './Header/NavBar'
import './Dashboard.css'

class Dashboard extends Component {
    // static contextType = DashContext;

    render() {
        return (
            <div className='dash-wrapper'>
                <section className='dash-item'>
                    <h4>Profile Sidebar</h4>
                </section>
                <section className='dash-item'>
                    <h3>Feed</h3>
                    
                </section>
                <section className='dash-item'>
                    <h4>Watch List</h4>
                    <Watch />
                </section>
            </div>
        )
    }
}

export default Dashboard