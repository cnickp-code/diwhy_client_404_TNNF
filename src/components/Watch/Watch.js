import React, { Component } from 'react';
import DashContext from '../../contexts/DashContext';
import { Link } from 'react-router-dom'
import ScrollArea from 'react-scrollbar';


export default class Watch extends Component {
    static contextType = DashContext

    //conditional render for if the user has nothing interacted with at the time. y
    //build either a filter or a next button or a scroll
    //onClick link to thread or wanted. link to endpoint with specific thread id or wanted id
    //onClick={} whatever/whatever/threads/${threadId}
    //elsewhere, on specific thread or wanted posting, add a watch/unwatch toggle

    

    render() {
        const { threads } = this.context;
        console.log(threads)
        
        const threadList = threads.map(thread => {
            return (
                    <li key={thread.id}>
                        <h4> {thread.title} </h4>
                        <p> {thread.content} </p>
                        <p> {thread.date_created.toLocaleString()} </p>
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
                <div className='watchList'>
                    <ul className='questions'>
                        {threadList}
                    </ul>
                </div>
            </ScrollArea>
        )
    }
}