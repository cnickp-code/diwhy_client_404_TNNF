import React from 'react';
import CommentItem from './CommentItem';
import './Comment.css';
import CommentsApiService from '../../Services/comments-api-service';
import AppContext from '../../contexts/AppContext';

class CommentList extends React.Component {
    static contextType = AppContext;

    componentDidMount() {
        CommentsApiService.getCommentsByThreadId(this.props.threadId)
            .then(comments => {
                this.context.setComments(comments);
            })
    }

    render() {
        console.log(this.context.comments);
        let commentList = this.context.comments.map(comment => {
            return <CommentItem key={comment.id} comment={comment} />
        })

        return (
            <ul className="comment-list">
                {commentList}
            </ul>
        )
    }
}

export default CommentList;