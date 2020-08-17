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
        WantedApiService.getById(1)
        WantedApiService.getAllPostings()
        // const postings = WantedApiService.getWanted();
        // this.setState({
        //     postings
        // })
    }

    handleSubmit(ev) {
        ev.preventDefault()
        const { title, content, category } = ev.target
        const newPosting = {
            title: title.value,
            content: content.value,
            category: category.value
        }
        WantedApiService.postPosting(newPosting)
    }

    render() {
        const { postings } = this.state;

        const postingList = postings.map(posting => {
            return (
                <li className='note sticky' key={posting.id}>
                    <Link className='postingId' to={'/wanted-item/' + posting.id} key={posting.id}>
                        <div className='tack'></div>
                        <p className='note-content'>
                            {posting.content}
                        </p>
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
                    {/* Selection of category affects the handleSubmit */}

                    <Label htmlFor='Help_Wanted_Posting_Title_Input'>Project Title</Label>
                    <Input htmlFor='Help_Wanted_Posting_Title_Input' placeholder='Project Title' name='Help_Wanted_Posting_Title_Input' className='Help_Wanted_Posting_Title_Input' id='title' />

                    <Label htmlFor='Help_Wanted_Posting_Textarea'>Describe Your Project</Label>
                    <Textarea placeholder='Project Description' name='Help_Wanted_Posting_Textarea' className='Help_Wanted_Posting_Textarea' id='content' />
                    {/* I imagine whatever goes in this goes in the 'content' part of the database */}

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

