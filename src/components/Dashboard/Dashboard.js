import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import AppContext from '../../contexts/AppContext'
import Watch from '../Watch/Watch'
import Feed from '../Feed/Feed'
import Tabs from '../Tabs/Tabs'
import './Dashboard.css'
import NewPostForm from '../CreateNew/NewPostForm';
import FormOverlay from '../CreateNew/FormOverlay';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: window.innerWidth
        };
    }

    static contextType = AppContext;


    handleChange = e => {
        this.setState({
            value: e.target.value,
        })
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth })
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;
        return (
            <>
                {isMobile
                    ? (
                        (
                            <Tabs className='dash-wrapper'>
                                <div label='Feed'><Feed /></div>
                                <div label='Create New'><NewPostForm /></div>
                                <div label='Watch List'><Watch /></div>
                            </Tabs>
                        )
                    )
                    : (
                        <div className='dash-wrapper'>
                            {this.context.showPostOverlay && <FormOverlay />}
                            <div className='dash-content'>

                                <Feed />
                                <Watch />
                            </div>
                        </div>
                    )
                }
            </>
        )
    }
}

export default Dashboard