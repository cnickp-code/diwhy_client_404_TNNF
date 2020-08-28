import React from 'react';
import CommentItem from './CommentItem';
import './Comment.css';
import CommentsApiService from '../../Services/comments-api-service';
import AppContext from '../../contexts/AppContext';

class CommentList extends React.Component {
    static contextType = AppContext;

    componentDidMount() {
        console.log(this.context)
        this.context.setLoading(true);
        CommentsApiService.getCommentsByThreadId(this.props.threadId)
            .then(comments => {
                this.context.setComments(comments);
                this.context.setLoading(false);
            })
    }

    render() {
        let commentList = [];

        if (!this.context.loading) {
            commentList = this.context.comments.map(comment => {
                return <CommentItem key={comment.id} comment={comment} />
            })
        }


        return (
            <div className="main-comment-container">
                <h3 className='ti-comments-header'>Comments:</h3>
                <ul className="comment-list">
                    {commentList}
                </ul>
            </div>

        )
    }
}

export default CommentList;