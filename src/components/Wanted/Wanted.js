import React, { Component } from 'react'
import './Wanted.css'
import AppContext from '../../contexts/AppContext'
import WantedApiService from '../../Services/want-api-service';
import { Link } from 'react-router-dom'
import { Input, Label, Textarea, Button } from '../Util/Util'

export default class Wanted extends Component {
    state = {
        postings: [],
        error: null
    }
    static contextType = AppContext;

    componentDidMount() {
        WantedApiService.getAllPostings()
            .then(postings => {
                this.context.setPostings(postings)
            })
    }

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

    render() {
        const { postings } = this.context;

        const postingList = postings.map(posting => {
            const categoryName = this.getCategoryName(posting.category)
            return (
                <li className='note sticky' key={posting.id}>
                    <Link className='postingId' to={'/wanted-item/' + posting.id} key={posting.id}>
                        <div className='tack'></div>
                        <h2 className='posting-title'>{posting.title}</h2>
                        <h3 className='posting-category' >{categoryName}</h3>
                    </Link>
                </li>
            )
        })
        return (
            <div>
                <form className='help-wanted-form' onSubmit={this.handleSubmit}>
                    <h3 className='posting-form-header'>Ask For Help</h3>
                    <Label htmlFor='Help_Wanted_Posting_Select'>Project Category</Label>
                    {/* Dropdown featuring list of categories*/}
                    <select value={this.state.value} onChange={this.handleChange} name='Help_Wanted_Posting_Select' className='Help_Wanted_Posting_Select' id='category'>
                        <option value='1'>Woodworking</option>
                        <option value='2'>Metalworking</option>
                        <option value='3'>Needlecraft</option>
                        <option value='4'>Automotive</option>
                        <option value='5'>Home Improvement</option>
                        <option value='6'>General Crafts</option>
                        <option value='7'>Electionics</option>
                        <option value='8'>Outdoorsmanship</option>
                    </select>

                    <Label htmlFor='Help_Wanted_Posting_Title_Input'>Project Title</Label>
                    <Input required htmlFor='Help_Wanted_Posting_Title_Input' placeholder='Project Title' name='Help_Wanted_Posting_Title_Input' className='Help_Wanted_Posting_Title_Input' id='title' maxLength='15' />

                    <Label htmlFor='Help_Wanted_Posting_Textarea'>Describe Your Project</Label>
                    <Textarea required placeholder='Project Description' name='Help_Wanted_Posting_Textarea' className='Help_Wanted_Posting_Textarea' id='content' />

                    {/* Upload form for relevant photos? (stretch goal I assume) */}
                    <Button type='submit' className='help-wanted-button'>Submit</Button>
                </form>
                <ul id='want-wrapper'>
                    {postingList}
                </ul>
            </div>
        )
    }
}

