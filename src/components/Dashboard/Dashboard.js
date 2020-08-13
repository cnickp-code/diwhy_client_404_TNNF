import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import AppContext from '../../contexts/AppContext'
import Watch from '../Watch/Watch'
import Feed  from '../Feed/Feed'
import Sidebar from '../Profile/Sidebar'
import './Dashboard.css'
import CreateNew from '../CreateNew/CreateNew'
import NewPostForm from '../CreateNew/NewPostForm';

class Dashboard extends Component {
    static contextType = AppContext;

    handleChange = e => {
        this.setState({
            value: e.target.value,
        })
    }

    render() {
        return (
            <div className='dash-wrapper'>
                <section className='dash-item'>
                    <Sidebar />
                </section>
                <div className='dash-main'>
                    <section className='dash-item'>
                        {/* <CreateNew /> */}
                        <NewPostForm />
                    </section>
                    <section className='dash-item'>
                        <Feed />
                    </section>
                </div>
                <section className='dash-item'>
                    <Watch />
                </section>
            </div>
        )
    }
}

export default Dashboard