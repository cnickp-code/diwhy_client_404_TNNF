import React from 'react';
import PostingApiService from '../../Services/postings-api-service';

class PostApplicantForm extends React.Component {
    

    handleSubmit = (ev) => {
        ev.preventDefault()
        const { application } = ev.target
        PostingApiService.postApplicant(this.props.id, application.value)
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder='Comments' type='text' id='application'/>
                <button type='submit'>Apply</button>
            </form>
        )
    }
}

export default PostApplicantForm;