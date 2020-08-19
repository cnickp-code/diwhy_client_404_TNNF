import React from 'react';
import AppContext from '../../contexts/AppContext';
import CommentsApiService from '../../Services/comments-api-service';

class CommentItem extends React.Component {
    static contextType = AppContext;

    handleDelete = () => {
        CommentsApiService.deleteComment(this.props.comment.id, this.context.deleteComment);
    }


    render() {
        // let currentDate = this.props.comment.date_created.split('T')[0].split('-');
        // let year = currentDate.shift();
        // currentDate.push(year);
        // currentDate = currentDate.join('/');

        let currentDate = new Date(this.props.comment.date_created).toLocaleString();

        return (
            <li className="comment-container">
                <h5 className="comment-header">{this.props.comment.user_name}</h5>
                <p className="comment-body">
                    {this.props.comment.content}
                </p>
                <div className="comment-bottom-container">
                    <p className="comment-date"><i>{currentDate}</i></p>
                    <div className="comment-buttons">
                        {/* <button className="comment-btn">
                            <i className="fas fa-edit"></i>
                        </button> */}
                        {(this.props.comment.user_name === this.context.user.user_name) && <button className="comment-btn" onClick={this.handleDelete}>
                            <i className="fas fa-eraser"></i>
                        </button>}
                    </div>
                </div>

            </li>
        )
    }
}

export default CommentItem;