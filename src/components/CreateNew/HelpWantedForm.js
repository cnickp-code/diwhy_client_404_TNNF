import React from 'react';
import AppContext from '../../contexts/AppContext';
import { Input, Label, Textarea, Button } from '../Util/Util'
import { Link } from 'react-router-dom'


class HelpWantedForm extends React.Component {

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

    
    render() {
        return (
            <form className='help-wanted-form' onSubmit={this.handleSubmit}>
                    <h3 className='form-header'>Ask For Help</h3>
                    <Label htmlFor='hw-select'>Project Category</Label>
                    <select  name='hw-select'  className='hw-select' id='category'>
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
        )
    }
}

export default HelpWantedForm;