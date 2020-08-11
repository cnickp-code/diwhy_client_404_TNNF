import React, { Component } from 'react';
import WantedApiService from '../Services/want-api-service';

const WantedContext = React.createContext({
    postings: []
})

export default WantedContext

export class WantedProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postings: []
        }
    }

    componentDidMount() {
        const postings = WantedApiService.getWanted();
        console.log(postings);

        this.setState({
            postings
        })
    }

    render() {
        const value = {
            postings: this.state.postings
        }
        return (
            <WantedContext.Provider value={value}>
                {this.props.children}
            </WantedContext.Provider>
        )
    }
}