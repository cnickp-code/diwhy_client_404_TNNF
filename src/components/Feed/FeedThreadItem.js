import React from 'react';
import AppContext from '../../contexts/AppContext';
import ThreadsApiService from '../../Services/threads-api-service';
import { Link } from 'react-router-dom'
import { Button } from '../Util/Util'

class FeedThreadItem extends React.Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            likes: []
        }
    }

    componentDidMount() {
        ThreadsApiService.getLikesByThreadId(this.props.thread.id)
            .then(likes => {
                this.setState({
                    likes
                })
            })
    }

    handleLikeThread = () => {
        let newLike = {
            user_id: this.context.user.userId,
            thread_id: this.props.thread.id
        }
        ThreadsApiService.postLikeByThreadId(newLike)
            .then(like => {
                ThreadsApiService.getLikesByThreadId(this.props.thread.id)
                    .then(likes => {
                        this.setState({
                            likes
                        })
                    })
            })
    }

    // handleSetLikes = () => {

    // }

    handleUnlikeThread = () => {
        ThreadsApiService.deleteLikeByThreadId(this.props.thread.id)
            .then(like => {
                ThreadsApiService.getLikesByThreadId(this.props.thread.id)
                    .then(likes => {
                        this.setState({
                            likes
                        })
                    })
            })
    }

    render() {
        let likes = this.state.likes.length;
        let likeBool = false;

        this.state.likes.forEach(like => {
            if (this.context.user.userId === like.user_id) {
                likeBool = true;
            }
        })

        return (
            <li className="tl-header" key={this.props.thread.id}>
                <Link className='threadId' to={'/thread/' + this.props.thread.id} key={this.props.thread.id}>
                    <h2 className="hw-name">{this.props.thread.title}</h2>
                        <div className="tl-header-content">
                            <img src={this.props.thread.user_pic} alt='prop' className="tl-pic"></img>
                            <h3 className="tl-title">{this.props.thread.user_name}</h3>
                        </div>
                </Link>
                <div className='tl-options'>
                    {/* {thread likes variable} */}
                    <Button className='feed-btn'>Add To Watch List</Button>
                    {!likeBool && <Button className="feed-btn" onClick={this.handleLikeThread}><i className="far fa-heart"></i>{' '}{likes}</Button>}
                    {likeBool && <Button className="feed-btn" onClick={this.handleUnlikeThread}><i className="fas fa-heart"></i>{' '}{likes}</Button>}
                </div>
            </li>
        )
    }
}

export default FeedThreadItem;