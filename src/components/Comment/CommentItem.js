import React from 'react';

class CommentItem extends React.Component {
    render() {
        let currentDate = this.props.comment.date_created.split('T')[0].split('-');
        let year = currentDate.shift();
        currentDate.push(year);
        currentDate = currentDate.join('/');

        console.log(currentDate);


        return (
            <li className="comment-container">
                <h5 className="comment-header">{this.props.comment.user_name}</h5>
                <p className="comment-body">
                    {this.props.comment.content}
                </p>
                <div className="comment-bottom-container">
                    <p className="comment-date"><i>{currentDate}</i></p>
                    <div className="comment-buttons">
                        <button className="comment-btn">
                            <i className="fas fa-edit"></i>
                        </button>
                        <button className="comment-btn">
                            <i className="fas fa-eraser"></i>
                        </button>
                    </div>
                </div>

            </li>
        )
    }
}

export default CommentItem;