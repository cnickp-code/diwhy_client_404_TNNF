import React from 'react';
import CommentsServices from '../../Services/comments-api-service';
import './Comment.css';
import AppContext from '../../contexts/AppContext';

export default class CommentForm extends React.Component {

    static contextType = AppContext;

    handleSubmit = (e) => {
        e.preventDefault();

        const { comment } = e.target;

        let commentObj = {
            content: comment.value,
            thread_id: this.props.threadId,
            user_id: this.context.user.userId
        };

        CommentsServices.postComment(commentObj)
            .then(res => {
                CommentsServices.getCommentsByThreadId(this.props.threadId)
                    .then(comments => {
                        this.context.setComments(comments)
                        this.context.setLoading(false)
                    })
                comment.value = ''
            });
    };

    render() {
        return (
            <form id="comment-form" onSubmit={this.handleSubmit}>
                <textarea id="comment" className="comment-text" placeholder="Plz no troll" maxLength="5000"></textarea>
                <div className="comment-button-container">
                    <button type="submit" className="hw-btn">Post</button>
                </div>
            </form>
        );
    };
};