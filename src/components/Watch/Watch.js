import React, { Component } from 'react';
import AppContext from '../../contexts/AppContext';
import { Link } from 'react-router-dom'
import ScrollArea from 'react-scrollbar';
import ThreadsApiService from '../../Services/threads-api-service';
import './Watch.css'
import { FormatD } from '../Util/Util'
import { format as formatDate } from 'date-fns';


export default class Watch extends Component {
    state = {
        threads: [],
    };

    static contextType = AppContext

    //conditional render for if the user has nothing interacted with at the time. y
    //build either a filter or a next button or a scroll
    //onClick link to thread or wanted. link to endpoint with specific thread id or wanted id
    //onClick={} whatever/whatever/threads/${threadId}
    //elsewhere, on specific thread or wanted posting, add a watch/unwatch toggle

    componentDidMount() {
        this.context.clearError()
        this.context.handleGetThreads()
        // this.setState({ threads })
        // .then((data) => {
        //     console.log(data)
        //     this.context.setThreads(data)
        // })
    }

    render() {
        const { threads } = this.context; //change to context later when api works

        const threadList = threads.map(thread => {
            return (
                <li key={thread.id} className='thread-list'>
                    <a href={`/thread/${thread.id}`} id='header'><p>{thread.title}</p></a>
                    {/* <p> {FormatD(thread.date_created, 'Do MMM, yyyy HH:mm:ss')} </p> */}
                </li>
            )
        })

        if (!threads) {
            return (
                <div>
                    Any wanted posting or thread you follow will show up here.
                </div>
            )
        }
        return (
            <ScrollArea>
                <h3 id='header'>Watch List</h3>
                <ul className='threads'>
                    {threadList}
                </ul>
            </ScrollArea>
        )
    }
}