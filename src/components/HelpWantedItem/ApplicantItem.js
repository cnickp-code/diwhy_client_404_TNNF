import React from 'react';
import AppContext from '../../contexts/AppContext';
import PostingsApiService from '../../Services/postings-api-service';
import WantedApiService from '../../Services/want-api-service';

export default class ApplicantItem extends React.Component {

    static contextType = AppContext;

    constructor(props) {
        super(props)
        this.state = {
            accepted: false,
        };
    };

    handleAcceptApplicant = () => {
        let updatedPosting = {
            accepted_app: this.props.applicant.user.user_name
        };

        PostingsApiService.updatePosting(this.props.applicant.posting_id, updatedPosting)
            .then(posting => {
                WantedApiService.getAllPostings()
                    .then(postings => {
                        this.context.setPostings(postings);
                    });
            });

        this.setState({ accepted: true });
    };

    handleCancelApplicant = () => {
        let updatedPosting = {
            accepted_app: null
        };

        PostingsApiService.updatePosting(this.props.applicant.posting_id, updatedPosting)
            .then(posting => {
                WantedApiService.getAllPostings()
                    .then(postings => {
                        this.context.setPostings(postings);
                    });
            });
        this.setState({ accepted: false });
    };

    handleDeleteApplicant = () => {
        PostingsApiService.deleteApplicant(this.props.applicant.id)
            .then(() => {
                PostingsApiService.getApplicationsByPosting(this.props.posting.id)
                    .then(applicants => {
                        this.context.setApplicants(applicants);
                    });
            });
    };

    render() {
        let accepted = <button className='application-button' onClick={this.handleAcceptApplicant}>Accept</button>
        let postingId = this.props.posting.id;
        let focusPosting;

        if (this.context.postings.length > 0) {
            focusPosting = this.context.postings.find(posting => posting.id === postingId);
            if (focusPosting !== undefined && focusPosting.accepted_app === this.props.applicant.user.user_name) {
                accepted = <button className='application-button' onClick={this.handleCancelApplicant}>Cancel</button>
            };
        };

        return (
            <li className='applicant-list-item' >
                <div className="applicant-inner">
                    <div className="app-user">
                        <img src={this.context.user.profile_pic} alt='prop' className="ti-pic"></img>
                        <a href={`/profile/${this.props.applicant.user.user_name}`}><h2 className="ti-name"> {this.props.applicant.user.user_name}</h2></a>
                    </div>
                    <p>{this.props.applicant.content}</p>
                    {(this.context.user.user_name === this.props.posting.user_name) && <div className='application-button-container'>
                        {accepted}
                        <button className='application-button' onClick={this.handleDeleteApplicant}>Delete</button>
                    </div>}
                    {(this.context.user.user_name === this.props.applicant.user.user_name) && <button className='hw-btn' onClick={this.handleDeleteApplicant}>Rescind</button>}
                </div>
            </li>
        );
    };
};