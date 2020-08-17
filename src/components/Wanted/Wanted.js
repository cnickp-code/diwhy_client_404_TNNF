import React, { Component } from 'react'
import './Wanted.css'
import AppContext from '../../contexts/AppContext'
import WantedApiService from '../../Services/want-api-service';
import { Link } from 'react-router-dom'
import { Input, Label, Textarea, Button } from '../Util/Util'

export default class Wanted extends Component {
    state = {
        postings: []
    }
    static contextType = AppContext;

    componentDidMount() {
        const postings = WantedApiService.getWanted();


        this.setState({
            postings
        })
    }

    handleSubmit(ev) {
        
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
                <form className='help-wanted-form'>
                    <h3 className='posting-form-header'>Ask For Help</h3>
                    <Label htmlFor='Help_Wanted_Posting_Select'>Project Category</Label>
                    {/* Dropdown featuring list of categories*/}
                    <select value={this.state.value} onChange={this.handleChange} name='Help_Wanted_Posting_Select' id='Help_Wanted_Posting_Select'>
                        <option value='Woodworking'>Woodworking</option>
                        <option value='Metalworking'>Metalworking</option>
                        <option value='Needlecraft'>Needlecraft</option>
                        <option value='Automotive'>Automotive</option>
                        <option value='Home Improvement'>Home Improvement</option>
                        <option value='General Crafts'>General Crafts</option>
                        <option value='Electionics'>Electionics</option>
                        <option value='Outdoorsmanship'>Outdoorsmanship</option>
                    </select>
                    {/* Selection of category affects the handleSubmit */}

                    <Label htmlFor='Help_Wanted_Posting_Title_Input'>Project Title</Label>
                    <Input htmlFor='Help_Wanted_Posting_Title_Input' placeholder='Project Title' name='Help_Wanted_Posting_Title_Input' id='Help_Wanted_Posting_Title_Input' />

                    <Label htmlFor='Help_Wanted_Posting_Textarea'>Describe Your Project</Label>
                    <Textarea placeholder='Project Description' name='Help_Wanted_Posting_Textarea' id='Help_Wanted_Posting_Textarea' />
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

