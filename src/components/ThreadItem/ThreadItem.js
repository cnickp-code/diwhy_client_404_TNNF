import React from 'react';
import AppContext from '../../contexts/AppContext';
import ThreadsApiService from '../../Services/threads-api-service';
import CategoryService from '../../Services/category-api-service';
import CommentList from '../Comment/CommentList';
import CommentForm from '../Comment/CommentForm';
import './ThreadItem.css';

class ThreadItem extends React.Component {
    static contextType = AppContext;

    state = {
        thread: {},
        loading: true,
    }

    componentDidMount() {
        CategoryService.getCategories()
            .then(categories => {
                this.context.setCategories(categories)
                ThreadsApiService.getThreadById(this.props.id)
                    .then(thread => {
                        let threadCategory = this.context.categories.find(item => item.id === thread.category)

                        const newThread = {
                            ...thread,
                            category: threadCategory.name
                        }
                        this.setState({
                            loading: false,
                            thread: newThread
                        })
                    })
            })

    }

    render() {
        const thread = this.state.thread || {}
        return (
            <div className="ti-main-container">
                <div className="ti-item-container">
                    <div className="ti-item-inner">
                        <div className="ti-header">
                            
                                <h3 className="ti-title">{thread.title}</h3>
                                <div className="ti-flex">
                                <div className="ti-user">
                                    <img src={thread.user_pic} alt='prop' className="ti-pic"></img>
                                    <a href={`/profile/${thread.user_name}`}><h2 className="ti-name"> {thread.user_name}</h2></a>
                                </div>
                                <p className="ti-body-footer">Topic: {thread.category}</p>
                            </div>

                                


                        </div>

                        <div className="ti-body-content">
                            {thread.content}
                        </div>


                    </div>
                </div>

                {!this.state.loading && <CommentForm threadId={thread.id} />}

                {!this.state.loading && <CommentList threadId={thread.id} />}

            </div>
        )
    }
}

export default ThreadItem