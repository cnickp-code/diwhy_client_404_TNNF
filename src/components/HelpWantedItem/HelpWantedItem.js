import React from 'react';
import './HelpWantedItem.css';
import AppContext from '../../contexts/AppContext';
import WantApiService from '../../Services/want-api-service';
import PostApplicantForm from '../CreateNew/PostApplicantForm';
import PostingsApiService from '../../Services/postings-api-service';

class HelpWantedItem extends React.Component {
    static contextType = AppContext;

    state = {
        posting: {},
        applicants: []
    }


    componentDidMount() {
        WantApiService.getById(this.props.id)
            .then(posting => {
                this.setState({
                    posting: posting
                })
            })

        PostingsApiService.getApplicationsByPosting(this.props.id)
            .then(applicants => {
                this.setState({
                    applicants: applicants
                })
            })
            .then(() => {
                console.log(this.state.applicants)
            })
    }

    getCategoryName(id) {
        const categoryById = this.context.categories.find(category => category.id === id)
        if (categoryById) {
            return categoryById.name
        }
    }

    render() {
        const applicantsList = this.state.applicants.map(applicant => {
            return (
                <li key={applicant.id}>
                    <h2>{applicant.user.email}</h2>
                    <p>{applicant.content}</p>
                </li>
            )
        })
        return (
            <div className="hw-main-container">
                {/* <div className="hw-pic-container">
                            <img src="https://via.placeholder.com/100" className="hw-pic"></img>
                        </div> */}
                <div className="hw-header-content">
                    <h2 className="hw-name"> {this.context.user.user_name}</h2>
                    <h3 className="hw-title"><i>{this.state.posting.title}</i></h3>
                </div>
                <p>{this.state.posting.content}</p>
                <div className="hw-body-footer">
                    <p>Topic: {this.getCategoryName(this.state.posting.category)}</p>
                    <div className="hw-body-buttons">
                        <button className="hw-btn">Apply</button>
                        <button className="hw-btn">Add To Watch List</button>
                    </div>
                </div>


                {/* This form doesnt go here. Should conditionally appear when apply button is clicked and disapper after submission */}
                <PostApplicantForm id={this.state.posting.id} />

                {/* This inline style is just temporary for testing display. */}
                <ul style={{
                    listStyle: 'none',
                    padding: '0'
                }}>
                    {applicantsList}
                </ul>
            </div>
        );
    }
}

export default HelpWantedItem;