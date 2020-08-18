import React from 'react';
import CommentItem from './CommentItem';
import './Comment.css';
import CommentsApiService from '../../Services/comments-api-service';
import AppContext from '../../contexts/AppContext';

class CommentList extends React.Component {
    static contextType = AppContext;

    componentDidMount() {
        this.context.setLoading(true);
        CommentsApiService.getCommentsByThreadId(this.props.threadId)
            .then(comments => {
                this.context.setComments(comments);
                this.context.setLoading(false);
            })
    }

    render() {
        let commentList = [];

        if(!this.context.loading) {
            commentList = this.context.comments.map(comment => {
                console.log(comment);
                return <CommentItem key={comment.id} comment={comment} />
            })
        }


        return (
            <ul className="comment-list">
                {commentList}
            </ul>
        )
    }
}

export default CommentList;