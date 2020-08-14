import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import AppContext from '../../contexts/AppContext'
import Watch from '../Watch/Watch'
import Feed from '../Feed/Feed'
import Sidebar from '../Profile/Sidebar'
import Tabs from './Tabs'
import './Dashboard.css'
import CreateNew from '../CreateNew/CreateNew'
import NewPostForm from '../CreateNew/NewPostForm';

class Dashboard extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         width: window.innerWidth
    //     };
    // }

    static contextType = AppContext;


    handleChange = e => {
        this.setState({
            value: e.target.value,
        })
    }

    // componentDidMount() {
    //     window.addEventListener('resize', this.handleWindowSizeChange);
    // }

    // componentWillUnmount() {
    //     window.addEventListener('resize', this.handleWindowSizeChange);
    // }

    // handleWindowSizeChange = () => {
    //     this.setState({ width: window.innerWidth })
    // }

    render() {
        // const { width } = this.state;
        // const isMobile = width <= 500;
        // { isMobile 
        //     ?

        //     : 
        // }

        // return(

        // )

        return (
            <div className='dash-wrapper'>
                {/* <section className='dash-item'>
                    <Sidebar />
                </section> */}
                {/* <div className='dash-main'> */}
                    <section className='dash-item'>
                        {/* <CreateNew /> */}
                        <NewPostForm />
                        <Feed />
                    </section>
                    {/* <section className='dash-item'> */}
                        
                    {/* </section> */}
                {/* </div> */}
                {/* <section className='dash-item'>
                    <Watch />
                </section> */}
            </div>
        )
    }
}

export default Dashboard