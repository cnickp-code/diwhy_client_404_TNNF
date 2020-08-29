import React from 'react';
import AppContext from '../../contexts/AppContext';
import CommentsApiService from '../../Services/comments-api-service';
import { Button } from '../Util/Util';

export default class CommentItem extends React.Component {

    static contextType = AppContext;

    constructor(props) {
        super(props)
        this.state = {
            likes: []
        };
    };

    componentDidMount() {
        CommentsApiService.getLikesByCommentId(this.props.comment.id)
            .then(likes => {
                this.setState({
                    likes
                });
            });
    };

    handleLikeComment = () => {
        let newLike = {
            user_id: this.context.user.userId,
            comment_id: this.props.comment.id
        };
        CommentsApiService.postLikeByCommentId(newLike)
            .then(like => {
                CommentsApiService.getLikesByCommentId(this.props.comment.id)
                    .then(likes => {
                        this.setState({
                            likes
                        });
                    });
            });
    };

    handleUnlikeComment = () => {
        CommentsApiService.deleteLikeByCommentId(this.props.comment.id)
            .then(like => {
                CommentsApiService.getLikesByCommentId(this.props.comment.id)
                    .then(likes => {
                        this.setState({
                            likes
                        });
                    });
            });
    };

    handleDelete = () => {
        CommentsApiService.deleteComment(this.props.comment.id, this.context.deleteComment)
    };


    render() {
        let currentDate = new Date(this.props.comment.date_created).toLocaleString();

        let likes = this.state.likes.length;
        let likeBool = false;

        this.state.likes.forEach(like => {
            if (this.context.user.userId === like.user_id) {
                likeBool = true
            };
        });

        return (
            <li className="comment-container">
                <div className="comment-user">
                    <img src={this.props.comment.user_pic} alt='prop' className="ti-pic"></img>
                    <a href={`/profile/${this.props.comment.user_name}`}><h5 className="comment-header">{this.props.comment.user_name}</h5></a>
                </div>

                <p className="comment-body">
                    {this.props.comment.content}
                </p>
                <div className="comment-bottom-container">
                    <p className="comment-date"><i>{currentDate}</i></p>
                    <div className="comment-buttons">
                        {/* <button className="comment-btn">
                            <i className="fas fa-edit"></i>
                        </button> */}
                        {!likeBool && <Button className="comment-btn" onClick={this.handleLikeComment}><i className="far fa-heart"></i>{' '}{likes}</Button>}
                        {likeBool && <Button className="comment-btn" onClick={this.handleUnlikeComment}><i className="fas fa-heart"></i>{' '}{likes}</Button>}
                        {/* <div className='tl-likes'>{likes}</div> */}
                        {(this.props.comment.user_name === this.context.user.user_name) && <Button className="comment-btn" onClick={this.handleDelete}>
                            <i className="fas fa-eraser"></i> Delete
                        </Button>}
                    </div>
                </div>
            </li>
        );
    };
};