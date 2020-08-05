import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import FeedContext from '../../contexts/FeedContext'
import Watch from '../Watch/Watch'
// import Util from '../Util/Util'
import './Dashboard.css'

class Dashboard extends Component {
    // static contextType = FeedContext;

    render() {
        return (
            <div className='dash-wrapper'>
                <section className='profile-sidebar'>

                </section>
                <section></section>
                <section className='watch-list'>
                    <Watch />
                </section>
            </div>
        )
    }
}

export default Dashboard