import React from 'react';
import PostingsApiService from '../../Services/postings-api-service';
import './PostApplicantForm.css';
import AppContext from '../../contexts/AppContext';

class PostApplicantForm extends React.Component {
    static contextType = AppContext;

    state = {
        applicants: []
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        const { application } = ev.target
        const { userId } = this.context.user
        PostingsApiService.postApplicant(this.props.id, application.value, userId)
            .then(() => {
                PostingsApiService.getApplicationsByPosting(this.props.id)
                    .then(applicants => {
                        this.context.setApplicants(applicants)
                    })
                application.value = ''
            })
    }

    render() {
        return (
            <form className='apply-form' onSubmit={this.handleSubmit}>
                <textarea className='application-text' placeholder='Comments' type='text' id='application' required/>
                <button className='apply-form-button' type='submit'>Apply Now</button>
            </form>
        )
    }
}

export default PostApplicantForm;