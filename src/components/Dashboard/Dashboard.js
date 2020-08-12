import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import AppContext from '../../contexts/AppContext'
import Watch from '../Watch/Watch'
import Feed  from '../Feed/Feed'
import Sidebar from '../Profile/Sidebar'
import './Dashboard.css'
import CreateNew from '../CreateNew/CreateNew'

class Dashboard extends Component {
    static contextType = AppContext;

    handleChange(e) {
        this.setState({
            value: e.target.value,
        })
     }

    render() {
        return (
            <div className='dash-wrapper'>
                <section className='dash-item'>
                    <h3 id='header'>Profile Sidebar</h3>
                    <Sidebar />
                </section>
                <section className='dash-item'>
                    <CreateNew />
                </section>
                <section className='dash-item'>
                    <Feed />
                </section>
                <section className='dash-item'>
                    <Watch />
                </section>
            </div>
        )
    }
}

export default Dashboard