import React from 'react';
import AppContext from '../../contexts/AppContext';
import './NewPostForm.css';
import ThreadsApiService from '../../Services/threads-api-service';

class NewPostForm extends React.Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            postType: null,
            category: null,
        }
    }

    handleChange = (e) => {
        this.setState({
            postType: e.target.value
        })
    }

    handleSetCategory = (e) => {
        this.setState({
            category: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

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

    render() {
        return (
                <form id="post-form" onSubmit={this.handleSubmit}>
                    <input id="title" type="text" placeholder="Title"></input>
                    <select id="type" value={this.state.value} onChange={this.handleChange}>
                        <option value='question'>Question</option>
                        <option value='project'>Project Spotlight</option>
                    </select>
                    <textarea id="content" className="post-info" placeholder="Ask a question!"></textarea>
                            Topic:
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
                    <button type="submit" className="hw-btn">Submit</button>
                </form>
        )
    }
}

export default NewPostForm;