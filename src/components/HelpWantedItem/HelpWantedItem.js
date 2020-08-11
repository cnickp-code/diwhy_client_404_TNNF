import React from 'react';
import './HelpWantedItem.css';
import PostingsApiService from '../../Services/postings-api-service';
import AppContext from '../../contexts/AppContext';

class HelpWantedItem extends React.Component {
    static contextType = AppContext;

    state = {
        posting: {},
    }


    componentDidMount() {
        const singlePosting = PostingsApiService.getPostingById(1)
        this.setState({
            posting: singlePosting
        })
    }

    render() {

        return (
            <div className="hw-main-container">
                <div className="hw-item-container">
                    <div className="hw-header">
                        <div className="hw-pic-container">
                            <img src="https://via.placeholder.com/100" className="hw-pic"></img>
                        </div>
                        <div className="hw-header-content">
                            <div className="hw-name-container">
                                <h2 className="hw-name"> {this.context.user.user_name}</h2>
                            </div>
                            <div className="hw-title-container">
                                <h3 className="hw-title"><i>{this.state.posting.title}</i></h3>
                            </div>
                        </div>
                    </div>
                    <div className="hw-body">
                        <div className="hw-body-content">
                            {this.state.posting.content}
                        </div>
                        <div className="hw-body-footer">
                            <div className="hw-body-topic">
                                <p>Topic: {this.state.posting.category}</p>
                            </div>
                            <div className="hw-body-buttons">
                                <button className="hw-btn">Apply</button>
                                <button className="hw-btn">Add To Watch List</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HelpWantedItem;