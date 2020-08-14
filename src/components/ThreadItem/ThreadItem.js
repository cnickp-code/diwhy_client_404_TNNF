import React from 'react';
import AppContext from '../../contexts/AppContext';
import ThreadsApiService from '../../Services/threads-api-service';
import './ThreadItem.css';

class ThreadItem extends React.Component {
    static contextType = AppContext;

    state = {
        thread: {},
    }

    componentDidMount() {
        ThreadsApiService.getThreadById(this.props.id)
        .then(thread => {
            this.setState({
                thread
            })
        })
    }

    render() {
        const thread = this.state.thread || {}
        return (
            <div className="ti-main-container">
              <div className="ti-item-container">
                    <div className="ti-header">
                        <div className="ti-pic-container">
                            <img src="https://via.placeholder.com/100" className="ti-pic"></img>
                        </div>
                        <div className="ti-header-content">
                            <div className="ti-name-container">
                                <h2 className="ti-name"> {thread.user_name}</h2>
                            </div>
                            <div className="ti-title-container">
                                <h3 className="ti-title"><i>{thread.title}</i></h3>
                            </div>
                        </div>
                    </div>
                    <div className="ti-body">
                        <div className="ti-body-content">
                            {thread.content}
                        </div>
                        <div className="ti-body-footer">
                            <div className="ti-body-topic">
                                <p>Topic: {thread.category}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThreadItem