import React, { Component } from 'react'
import './Thread.css'
import AppContext from '../../contexts/AppContext'
import ThreadsApiService from '../../Services/want-api-service';
// import { Link } from 'react-router-dom'
// import Util from '../Util/Util'

export default class Thread extends Component {
    state = {
        threads: []
    }
    static contextType = AppContext;

    componentDidMount() {
        // const threads = ThreadApiService.getThread();
        ThreadsApiService.getThreads()
        .then(threads => {
            this.context.setThreads(threads)
        })
        console.log(threads);

        // this.setState({
        //     threads
        // })
    }
    render() {
        const { threads } = this.context;

        const threadList = threads.map(thread => {
            return (
                <div className='note sticky' key={thread.id}>
                    <div className='tack'></div>
                    <div className='note-content'>
                        {thread.content}
                    </div>
                </div>
            )
        })
        return (
            <div id='want-wrapper'>
                {threadList}
            </div>
        )
    }
}

