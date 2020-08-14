import React from 'react';
import ThreadItem from '../components/ThreadItem/ThreadItem'

class ThreadItemPage extends React.Component {
    render() {
        let threadId = this.props.match.params.id
        return (
            <div>
                <ThreadItem  id={threadId}/>
            </div>
        )
    }
}

export default ThreadItemPage;