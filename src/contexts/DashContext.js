import React, { Component } from 'react'
import DashApiService from '../Services/dash-api-service';

const DashContext = React.createContext({
    user: {},
    thread: {},
    threads: [],
    comments: [],
    error: null,
    setError: () => {},
    clearError: () => {},
})

export default DashContext

export class DashProvider extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            threads: []
        }
    }

    componentDidMount() {
        const threads = DashApiService.getThreads();
        console.log(threads);
        
        this.setState({
            threads
        })

        // DashApiService.getThreads()
        //     .then(threads => {
        //         this.setState({
        //             threads
        //         })
        //     })
        
    }

    render() {
        const value = {
            threads: this.state.threads
        }
        return (
            <DashContext.Provider value={value}>
                {this.props.children}
            </DashContext.Provider>


        )
    }
}