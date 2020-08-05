import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FeedContext from '../../contexts/FeedContext'
import Util from '../Util/Util'
import './Dashboard.css'

class Dashboard extends Component {
    static contextType = FeedContext;

    render() {
        return (
            <div className='dash-wrapper'>
                
            </div>
        )
    }
}

export default Dashboard