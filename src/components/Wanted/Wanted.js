import React, { Component } from 'react'
import './Wanted.css'
import AppContext from '../../contexts/AppContext'
import WantedApiService from '../../Services/want-api-service';
// import { Link } from 'react-router-dom'
// import Util from '../Util/Util'

export default class Wanted extends Component {
    state = {
        postings: []
    }
    static contextType = AppContext;

    componentDidMount() {
        const postings = WantedApiService.getWanted();
        console.log(postings);

        this.setState({
            postings
        })
    }
    render() {
        const { postings } = this.state;

        const postingList = postings.map(posting => {
            return (
                <li className='note sticky' key={posting.id}>
                    <div className='tack'></div>
                    <p className='note-content'>
                        {posting.content}
                    </p>
                </li>
            )
        })
        return (
            <ul id='want-wrapper'>
                {postingList}
            </ul>
        )
    }
}

