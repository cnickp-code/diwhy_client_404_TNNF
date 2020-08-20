import React from 'react';
import AppContext from '../../contexts/AppContext';
import PostingsApiService from '../../Services/postings-api-service';
import WantedApiService from '../../Services/want-api-service';

class ApplicantItem extends React.Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            accepted: false,
        }
    }

    handleAcceptApplicant = () => {
        let updatedPosting = {
            accepted_app: this.props.applicant.user.user_name
        }

        PostingsApiService.updatePosting(this.props.applicant.posting_id, updatedPosting)
            .then(posting => {
                WantedApiService.getAllPostings()
                    .then(postings => {
                        this.context.setPostings(postings)
                    })
            })

        this.setState({
            accepted: true,
        })
    }

    handleCancelApplicant = () => {
        let updatedPosting = {
            accepted_app: null
        }

        PostingsApiService.updatePosting(this.props.applicant.posting_id, updatedPosting)
            .then(posting => {
                WantedApiService.getAllPostings()
                    .then(postings => {
                        this.context.setPostings(postings)

                    })
            })
        this.setState({
            accepted: false,
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
        console.log('CONTEXT POSTINGS ', this.context.postings);
        let accepted = <button className='application-button' onClick={this.handleCancelApplicant}>Cancel</button>;

        console.log('-----------------')
        console.log(this.props.posting.accepted_app)
        console.log(this.props.applicant.user.user_name)

        if (this.props.posting.accepted_app === this.props.applicant.user.user_name) {
            accepted = <button className='application-button' onClick={this.handleAcceptApplicant}>Accept</button>;
        }

        return (
            <li className='applicant-list-item' >
                <h2 className='application-header'>{this.props.applicant.user.user_name}</h2>
                <p>{this.props.applicant.content}</p>
                {(this.context.user.user_name === this.props.posting.user_name) && <div className='application-button-container'>
                    {accepted}
                    <button className='application-button' onClick={this.handleDeleteApplicant}>Delete</button>
                </div>}
            </li>
        )
    }
}

export default ApplicantItem