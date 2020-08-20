import React from 'react';
import AppContext from '../../contexts/AppContext';
import PostingsApiService from '../../Services/postings-api-service';


class ApplicantItem extends React.Component {
    static contextType = AppContext;

    handleAcceptApplicant = () => {
        let updatedPosting = {
            accepted_app: true 
        }
        PostingsApiService.updatedPosting(this.props.applicant.posting_id, updatedPosting)
            .then(posting => {
                console.log('RETURNED POSTING: ', posting);
            })
    }

    handleDeleteApplicant = (applicant_id) => {
        PostingsApiService.deleteApplicant(applicant_id)
            .then(() => {
                PostingsApiService.getApplicationsByPosting(this.props.posting.id)
                    .then(applicants => {
                        this.context.setApplicants(applicants)
                    })
            })
    }

    render() {
        console.log(this.props.posting)
        console.log(this.props.applicant)
        return (
            <li className='applicant-list-item' >
                <h2 className='application-header'>{this.props.applicant.user.user_name}</h2>
                <p>{this.props.applicant.content}</p>
                {(this.context.user.user_name === this.props.posting.user_name) && <div className='application-button-container'>
                    <button className='application-button' onClick={this.handleAcceptApplicant}>Accept</button>
                    <button className='application-button' onClick={this.handleDeleteApplicant}>Delete</button>
                </div>}
            </li>
        )
    }
}

export default ApplicantItem