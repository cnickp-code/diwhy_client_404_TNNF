import React, { Component } from 'react'

const DashContext = React.createContext({
    user: {},
    thread: {},
    comments: [],
    error: null,
    setError: () => {},
    clearError: () => {},
})

export default DashContext

export class DashProvider extends Component {
    constructor(props) {
        super(props)
        const state = { }
    }

    componentDidMount() {
        
    }
}