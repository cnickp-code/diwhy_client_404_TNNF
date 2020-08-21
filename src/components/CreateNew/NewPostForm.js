import React from 'react';
import AppContext from '../../contexts/AppContext';
import './NewPostForm.css';
import ThreadsApiService from '../../Services/threads-api-service';
import { Label, Textarea, Input, Button } from '../Util/Util'

class NewPostForm extends React.Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            category: null,
        }
    }

    handleSetCategory = (e) => {
        this.setState({
            category: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.context.toggleOverlay();
        let date = new Date();
        date = date.toISOString();

        const { title, content, category } = e.target;
        const { userId } = this.context.user
        const newThread = {
            title: title.value,
            content: content.value,
            category: Number(category.value),
            date_created: date,
            user_id: userId
        }




        ThreadsApiService.postThread(newThread)
            .then(thread => {
                title.value = '';
                content.value = '';
                category.value = '1';
                console.log('hello')

                ThreadsApiService.getThreads()
                    .then(threads => {
                        this.context.setThreads(threads);
                    })
            })
    }

    closeOverlay = () => {
        this.context.toggleOverlay();
    }

    render() {
        return (
            <form id="post-form" onSubmit={this.handleSubmit}>
                <div className="exit" onClick={this.closeOverlay}>
                    <i class="far fa-times-circle"></i>
                </div>
                <h3 className='form-header'>Create New</h3>
                <Label htmlFor='cn-select'>Thread Category</Label>
                <select id="category" value={this.state.value} onChange={this.handleSetCategory} className="post-select">
                    <option value='1'>Woodworking</option>
                    <option value='2'>Metalworking</option>
                    <option value='3'>Needlecraft</option>
                    <option value='4'>Automotive</option>
                    <option value='5'>Home Improvement</option>
                    <option value='6'>General Crafts</option>
                    <option value='7'>Electronics</option>
                    <option value='8'>Outdoorsmanship</option>
                </select>
                <Label htmlFor='cn-title-input'>Thread Title</Label>
                <Input id="title" type="text" className='cn-title-thread' placeholder="Thread Title"></Input>
                <Label htmlFor='cn-textarea'>Thread Content</Label>
                <Textarea id="content" className="post-info" placeholder="Ask a question!"></Textarea>
                <Button type="submit" className="hw-btn">Submit</Button>
            </form>
        )
    }
}

export default NewPostForm;