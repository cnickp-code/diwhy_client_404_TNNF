import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Wantedcontext from '../../context/WantedContext'
import Util from '../Util/Util'

class Wanted extends Component {
    static contextType = Wantedcontext;

    render() {
        return (
            <div className='want-wrapper'>

            </div>
        )
    }
}

export default Wanted