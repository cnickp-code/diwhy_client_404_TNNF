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
            <div className="form-container">
                <form id="post-form" onSubmit={this.handleSubmit}>
                    {/* <div className="top-container"> */}
                    {/* <div className="post-header"> */}
                    {/* <img src="https://via.placeholder.com/100" alt='prop' className="post-pic"></img> */}
                    {/* <div className="post-title"> */}
                    <input id="title" type="text" placeholder="Title"></input>
                    {/* </div> */}
                    {/* <div className="post-select"> */}
                    <select id="type" value={this.state.value} onChange={this.handleChange}>
                        <option value='question'>Question</option>
                        <option value='project'>Project Spotlight</option>
                    </select>
                    {/* </div> */}
                    {/* </div> */}
                    <textarea id="content" className="post-info" placeholder="Ask a question!"></textarea>
                    {/* </div> */}
                    {/* <div className="bottom-container"> */}
                    {/* <div className="post-topic"> */}
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
                    {/* </div> */}
                    {/* <div className="hw-body-buttons"> */}
                    <button type="submit" className="hw-btn">Submit</button>
                    {/* </div> */}
                    {/* </div> */}
                </form>
            </div>
        )
    }
}

export default NewPostForm;