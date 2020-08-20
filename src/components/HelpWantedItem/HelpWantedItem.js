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
            if(app.user.user_name === this.context.user.user_name) {
                appBool = true;
            }
        })

        if(this.state.forward) {
            return <Redirect to='/wanted' />
        }

        return (
            <div >
                <div className="hw-internal-container">
                    <div className="hw-header-content">
                        <a href={`/profile/${this.state.posting.user_name}`}><h2 className="hw-name"> {this.state.posting.user_name}</h2></a>
                        <h3 className="hw-title"><i>{this.state.posting.title}</i></h3>
                    </div>
                    <p className='hw-content'>{this.state.posting.content}</p>
                    <p>Topic: {this.getCategoryName(this.state.posting.category)}</p>
                    <div className="hw-body-buttons">
                        {(this.context.user.user_name === this.state.posting.user_name) && 
                        <button type='button' className="hw-btn" onClick={() => this.handleDeletePosting(this.state.posting.id)}>Delete</button>}
                    </div>
<<<<<<< HEAD
                    {!(this.state.posting.user_name === this.context.user.user_name) && <PostApplicantForm id={this.state.posting.id} />}
=======

                    {/* This form doesnt go here. Should conditionally appear when apply button is clicked and disapper after submission */}
                    {!(this.state.posting.user_name === this.context.user.user_name) && !appBool && <PostApplicantForm id={this.state.posting.id} />}
>>>>>>> 3a32217209bb824a47702e81dba01416127e6c67
                </div>
                <ul className='applicants-list' >
                    {applicantsList}
                </ul>
            </div>
        );
    }
}

export default HelpWantedItem;