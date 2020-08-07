import React, { Component } from 'react';
import DashContext from '../../contexts/DashContext';
// import { Link } from 'react-router-dom'
import ScrollArea from 'react-scrollbar';


export default class Watch extends Component {
    static contextType = DashContext

    //conditional render for if the user has nothing interacted with at the time. y
    //build either a filter or a next button or a scroll
    //onClick link to thread or wanted. link to endpoint with specific thread id or wanted id
    //onClick={} whatever/whatever/threads/${threadId}
    //elsewhere, on specific thread or wanted posting, add a watch/unwatch toggle
   


    render() {
        const { threads }= this.context;
        console.log(threads)
        if (threads.length === 0){
            return (
                <div>
                    Add the terads you would like to fallow.
                </div>
            )
        }
        return (
            <ScrollArea>
            <div className='watchList'>
                <ul className='questions'>
                    {/* <Link to='/wanted' onClick={this.handleExtendingTread}></Link> */}
                    <li>
                        <img src='' alt=''/> 
                        <h4>{threads.title}</h4>
                    </li>

                </ul>
            </div>
            </ScrollArea>
        )
    }
}