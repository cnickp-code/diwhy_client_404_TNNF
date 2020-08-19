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
                this.context.setApplicants(applicants)
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

    handleDelete = (applicant_id) => {
        PostingsApiService.deleteApplicant(applicant_id)
            .then(() => {
                PostingsApiService.getApplicationsByPosting(this.props.id)
                    .then(applicants => {
                        this.context.setApplicants(applicants)
                    })
            })
    }

    render() {
<<<<<<< HEAD
        console.log(this.state.posting)
        const applicantsList = this.state.applicants.map(applicant => {
=======
        const applicantsList = this.context.applicants.map(applicant => {
>>>>>>> 1747814fa42ae70f59f562dd5b3e9746a159483e
            return (
                <li className='applicant-list-item' key={applicant.id}>
                    <h2 className='application-header'>{applicant.user.user_name}</h2>
                    <p>{applicant.content}</p>
                    <div className='application-button-container'>
                        <button className='application-button'>Delete</button>
                        <button className='application-button'>Accept</button>
                    </div>
                </li>
            )
        })
        return (
            <div >
                {/* <div className="hw-pic-container">
                            <img src="https://via.placeholder.com/100" className="hw-pic"></img>
                        </div> */}
<<<<<<< HEAD
                <div className="hw-header-content">
                    <h2 className="hw-name"> {this.state.posting.user_name}</h2>
                    <h3 className="hw-title"><i>{this.state.posting.title}</i></h3>
                </div>
                <p>{this.state.posting.content}</p>
                <div className="hw-body-footer">
=======
                <div className="hw-main-container">
                    <div className="hw-header-content">
                        <h2 className="hw-name"> {this.context.user.user_name}</h2>
                        <h3 className="hw-title"><i>{this.state.posting.title}</i></h3>
                    </div>
                    <p className='hw-content'>{this.state.posting.content}</p>
>>>>>>> 1747814fa42ae70f59f562dd5b3e9746a159483e
                    <p>Topic: {this.getCategoryName(this.state.posting.category)}</p>
                    <div className="hw-body-buttons">
                        {/* <button className="hw-btn">Apply</button> */}
                        <button className="hw-btn">Add To Watch List</button>
                    </div>

                    {/* This form doesnt go here. Should conditionally appear when apply button is clicked and disapper after submission */}
                    <PostApplicantForm id={this.state.posting.id} />
                </div>
                {/* This inline style is just temporary for testing display. */}
                <ul className='applicants-list' >
                    {applicantsList}
                </ul>
            </div>
        );
    }
}

export default HelpWantedItem;