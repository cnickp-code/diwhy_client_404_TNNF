import React from 'react';
import PostingApiService from '../../Services/postings-api-service';

class PostApplicantForm extends React.Component {

    handleSubmit = (ev) => {
        const { application } = ev.target
        PostingApiService.postApplicant(posting_id, application.value)
    }

    render() {
        return (
            <form>
                <input placeholder='Comments' type='text' id='application'/>
                <button type='submit'>Apply</button>
            </form>
        )
    }
}