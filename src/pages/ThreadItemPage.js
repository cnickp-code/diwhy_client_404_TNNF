import React from 'react'
import ThreadItem from '../components/ThreadItem/ThreadItem'

export default class ThreadItemPage extends React.Component {
    render() {
        let threadId = this.props.match.params.id
        return (
            <ThreadItem id={threadId} />
        )
    }
}