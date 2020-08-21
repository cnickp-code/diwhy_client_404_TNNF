import React from 'react';
import './HelpWantedItem.css';
import AppContext from '../../contexts/AppContext';
import { Redirect } from 'react-router-dom'
import WantApiService from '../../Services/want-api-service';
import PostApplicantForm from '../CreateNew/PostApplicantForm';
import PostingsApiService from '../../Services/postings-api-service';
import ApplicantItem from './ApplicantItem';

class HelpWantedItem extends React.Component {
    static contextType = AppContext;

    static defaultProps = {
        history: {
            push: () => { },
        },
    };

    state = {
        posting: {},
        applicants: [],
        forward: false
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
    }

    getCategoryName(id) {
        const categoryById = this.context.categories.find(category => category.id === id)
        if (categoryById) {
            return categoryById.name
        }
    }



    handleDeletePosting = (posting_id) => {
        this.setState({
            forward: true
        })
        PostingsApiService.deletePosting(posting_id)
            .then(() => {
                PostingsApiService.getApplicationsByPosting(this.props.id)
                    .then(applicants => {
                        this.context.setApplicants(applicants)
                    })

            })
    }

    render() {
        const applicantsList = this.context.applicants.map(applicant => {
            return (
                <ApplicantItem key={applicant.id} applicant={applicant} posting={this.state.posting} />
            )
        })

        let appBool = false;
        this.context.applicants.forEach(app => {
            if (app.user.user_name === this.context.user.user_name) {
                appBool = true;
            }
        })

        if (this.state.forward) {
            return <Redirect to='/wanted' />
        }

        return (
            <>
                <div className="hw-internal-wrap">
                    <div className="hw-internal-container">

                        <div className="ti-header">
                            <h3 className="ti-title">{this.state.posting.title}</h3>
                            <div className="ti-flex">
                                <div className="ti-user">
                                    <img src={this.context.user.profile_pic} alt='prop' className="ti-pic"></img>
                                    <a href={`/profile/${this.state.posting.user_name}`}><h2 className="ti-name"> {this.state.posting.user_name}</h2></a>
                                </div>
                                <p className="hw-content">Topic: {this.getCategoryName(this.state.posting.category)}</p>
                            </div>

                        </div>
                        <p className='hw-content-body'>{this.state.posting.content}</p>
                        {/* <div className="hw-header-content">
                        <a href={`/profile/${this.state.posting.user_name}`}><h2 className="hw-name"> {this.state.posting.user_name}</h2></a>
                        <h3 className="hw-title">{this.state.posting.title}</h3>
                    </div>
                    
                    <p>Topic: {this.getCategoryName(this.state.posting.category)}</p> */}

                        <div className="hw-body-buttons">
                            {(this.context.user.user_name === this.state.posting.user_name) &&
                                <button type='button' className="hw-btn" onClick={() => this.handleDeletePosting(this.state.posting.id)}>Delete</button>}
                        </div>
                        {!(this.state.posting.user_name === this.context.user.user_name) && (!appBool) && <PostApplicantForm id={this.state.posting.id} />}
                    </div>
                </div>
                <div className="applicants-container">
                    <ul className='applicants-list' >
                        {applicantsList}
                    </ul>
                </div>

            </>
        );
    }
}

export default HelpWantedItem;