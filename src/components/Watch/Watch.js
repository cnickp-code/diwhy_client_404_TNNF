import React, { Component } from 'react';


export default class Watch extends Component {
    render() {
        const threads = this.props;

        return (
            <div className='watchList_Container'>
                <ul className='watchItems'>
                    <li>
                        <img src='' />
                        <h4>{threads.title}</h4>
                    </li>
                </ul>
            </div>
        )
    }
}