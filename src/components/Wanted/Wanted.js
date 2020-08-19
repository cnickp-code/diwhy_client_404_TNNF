import React, { Component } from 'react'
import './Wanted.css'
import AppContext from '../../contexts/AppContext'
import WantedApiService from '../../Services/want-api-service';
import { Link } from 'react-router-dom'
import { Input, Label, Textarea, Button } from '../Util/Util'

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
        const { title, content, category_posting } = ev.target
        const newPosting = {
            title: title.value,
            content: content.value,
            category: category_posting.value
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

    render() {
        const { postings } = this.context;

        console.log(this.state.value)

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
            <div className='want-wrapper'>
                <form className='help-wanted-form' onSubmit={this.handleSubmit}>
                    <h3 className='posting-form-header'>Ask For Help</h3>
                    <Label htmlFor='Help_Wanted_Posting_Select'>Project Category</Label>
                    {/* Dropdown featuring list of categories*/}
                    <select  name='Help_Wanted_Posting_Select'  className='Help_Wanted_Posting_Select' id='category'>
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
                <div className='filter-posts'>
                    <Label htmlFor='Wanted_Category_Select' className='category-select-label'>Filter By Category</Label>
                    <select id="categoryPostings" className='Feed_Category_Select' defaultValue='0' value={this.state.value} onChange={this.handleChange} ref={this.categoryPostings}>
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
                <ul id='want-items'>
                    {postingList}
                </ul>
            </div>
        )
    }
}

