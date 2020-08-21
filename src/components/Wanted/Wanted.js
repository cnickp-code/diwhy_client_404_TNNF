import React, { Component } from 'react'
import './Wanted.css'
import AppContext from '../../contexts/AppContext'
import WantedApiService from '../../Services/want-api-service';
import { Link } from 'react-router-dom'
import { Input, Label, Textarea, Button } from '../Util/Util'
// import FormOverlay from '../CreateNew/FormOverlay';
import HelpWantedOverlay from '../CreateNew/HelpWantedOverlay';

export default class Wanted extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            postValue: '',
            postings: [],
            error: null,
            formValue: ''
        };

        this.categoryPostings = React.createRef();
        this.formCategory = React.createRef();
    }

    static contextType = AppContext;

    componentDidMount() {
        WantedApiService.getAllPostings()
            .then(postings => {
                this.context.setPostings(postings)
            })
    }

    handlePostChange = (e) => {
        this.setState({
            postValue: this.formCategory.current.value
        })
    }

    handleChange = (e) => {
        this.setState({
            value: this.categoryPostings.current.value
        })

        let value = this.categoryPostings.current.value;
        let filteredPostings = this.context.fullPostings.filter(postings => postings.category === Number(value))

        if (value === '0') {
            this.context.setPostings(this.context.fullPostings);
        } else {
            this.context.setSearchPostings(filteredPostings);
        }
    }

    // handleChangeForm = (e) => {
    //     this.setState({

    //     })
    // }

    handleSubmit = (ev) => {
        ev.preventDefault()
        const { title, content, category } = ev.target
        const newPosting = {
            title: title.value,
            content: content.value,
            category: category.value
        }
        WantedApiService.postPosting(newPosting)
            .then(posting => {
                WantedApiService.getAllPostings()
                    .then(postings => {
                        title.value = '';
                        content.value = '';
                        this.setState({
                            postValue: '1'
                        })
                        this.context.setPostings(postings)
                    })
            })
    }

    getCategoryName(id) {
        const categoryById = this.context.categories.find(category => category.id === id)
        if (categoryById) {
            return categoryById.name
        }
    }

    showInputOverlay = () => {
        this.context.toggleOverlay();
    }


    render() {
        const { postings } = this.context;

        const postingList = postings.map(posting => {
            const categoryName = this.getCategoryName(posting.category)
            let acceptBool = false;
            if (posting.accepted_app) {
                acceptBool = true;
            }
            return (
                <li className='note sticky' key={posting.id}>
                    <Link className='postingId' to={'/wanted-item/' + posting.id} key={posting.id}>
                        <div className='tack'></div>
                        <h2 className='posting-title'>{posting.title}</h2>
                        <h3 className='posting-category' >{categoryName}</h3>
                        {!acceptBool && <h4 className="posting-apply">Apply Now!</h4>}
                        {acceptBool && <h4 className="posting-closed">Closed</h4>}
                    </Link>
                </li>
            )
        })
        return (
            <div className='want-wrapper'>
                {this.context.showPostOverlay && <HelpWantedOverlay />}
                {/* {this.context.showPostOverlay && <FormOverlay />} */}
<<<<<<< HEAD
<<<<<<< HEAD
                <form className='help-wanted-form' onSubmit={this.handleSubmit}>
=======
                    <form className='help-wanted-form' onSubmit={this.handleSubmit}>
>>>>>>> d6977eeefc047babb0c951b4203e1b2741d72fa0
=======
                <form className='help-wanted-form' onSubmit={this.handleSubmit}>
>>>>>>> 1da7f0f01b17721e2d0249a69ccf32cd342533cc
                    <h3 className='form-header'>Ask For Help</h3>
                    <Label htmlFor='hw-select'>Project Category</Label>
                    <select name='hw-select' className='hw-select' id='category'>
                        <option value='1'>Woodworking</option>
                        <option value='2'>Metalworking</option>
                        <option value='3'>Needlecraft</option>
                        <option value='4'>Automotive</option>
                        <option value='5'>Home Improvement</option>
                        <option value='6'>General Crafts</option>
                        <option value='7'>Electionics</option>
                        <option value='8'>Outdoorsmanship</option>
                    </select>
                    <Label htmlFor='hw-title-input'>Project Title</Label>
                    <Input required htmlFor='hw-title-input' placeholder='Project Title' name='hw-title-input' className='hw-title-input' id='title' maxLength='15' />
                    <Label htmlFor='hw-textarea'>Describe Your Project</Label>
                    <Textarea required placeholder='Project Description' name='hw-textarea' className='hw-textarea' id='content' />
                    <Button type='submit' className='hw-btn'>Submit</Button>
                </form>
                <div className="np-main-container">
                    <div className="np-container">
                        <h2 className="np-header">Have a project?</h2>
                        <div className="np-input" onClick={this.showInputOverlay}>
                            <i>Ask for help!!</i>
                        </div>
                    </div>
                </div>
                <div className='want-item'>
                    <div className="hw-outer-container">
                        <div className='filter-posts'>
                            <Label htmlFor='hw-cat-select' className='category-select-label'>Filter By Category</Label>
                            <select id="categoryPostings" className='cat-select' value={this.state.value} onChange={this.handleChange} ref={this.categoryPostings}>
                                <option value='0'>No Filter</option>
                                <option value='1'>Woodworking</option>
                                <option value='2'>Metalworking</option>
                                <option value='3'>Needlecraft</option>
                                <option value='4'>Automotive</option>
                                <option value='5'>Home Improvement</option>
                                <option value='6'>General Crafts</option>
                                <option value='7'>Electronics</option>
                                <option value='8'>Outdoorsmanship</option>
                            </select>
                        </div>
                        <ul className='hw-main-container'>
                            {postingList}
                        </ul>
                    </div>

                </div>
            </div >
        )
    }
}

