import React, { Component } from 'react'
import './Wanted.css'
import AppContext from '../contexts/AppContext'
import WantedApiService from '../../Services/want-api-service';
// import { Link } from 'react-router-dom'
// import Util from '../Util/Util'

export default class Wanted extends Component {
    static contextType = AppContext;

    componentDidMount() {
        const postings = WantedApiService.getWanted();
        console.log(postings);

        this.setState({
            postings
        })
    }
    render() {
        const { postings } = this.context;

        const postingList = postings.map(posting => {
            return (
                <div key={posting.id}>
                        <p> {posting.content} </p>
                   
                </div>
            )
        })
        return (
            <div id='want-wrapper'>
                <div className='note sticky'>
                    <div className='tack'></div>
                    {postingList}
                    {/* <p className='note-content'>Claw Hammer or Ball-Peen Hammer? Oh and I need help building a shelf.</p> */}
                </div>
                {/* <div className='note sticky'>
                    <div className='tack'></div>
                    <p className='note-content'>20 Bucks, 1 hour... you, me, and a room full of wood.</p>
                </div>
                <div className='note sticky'>
                    <div className='tack'></div>
                    <p className='note-content'>Please help me organize all these wires! I'm losing my mind!</p>
                </div>
                <div className='note sticky'>
                    <div className='tack'></div>
                    <p className='note-content'>I'd like to paint my kitchen, but I just don't have the confidence...</p>
                </div>
                <div className='note sticky'>
                    <div className='tack'></div>
                    <p className='note-content'>I'm working on tearing up my bathroom tiles...</p>
                </div>
                <div className='note sticky'>
                    <div className='tack'></div>
                    <p className='note-content'>Please help, I tried to fix my toilet and now my house is flooding!</p>
                </div> */}
            </div>
        )
    }
}

