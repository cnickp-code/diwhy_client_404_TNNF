import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import DashContext from '../../contexts/DashContext'
import Watch from '../Watch/Watch'
// import Util from '../Util/Util'
import './Dashboard.css'

class Dashboard extends Component {
    // static contextType = DashContext;

    render() {
        return (
            <div className='dash-wrapper'>
                <section className='profile-sidebar'>

                </section>
                <section className='feed'>

                </section>
                <section className='watch-list'>
                    <Watch />
                </section>
            </div>
        )
    }
}

export default Dashboard