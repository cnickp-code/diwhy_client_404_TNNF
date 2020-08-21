import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../contexts/AppContext'
import { Label, Button } from '../Util/Util'
import './Feed.css'
import Watch from '../Watch/Watch'
import NewPostForm from '../CreateNew/NewPostForm'

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            //checked: false 
        };

        this.category = React.createRef();
    }

    static contextType = AppContext

    componentDidMount() {
        this.context.clearError()
        // ThreadsApiService.getThreads()
        //     .then(threads => {
        //         this.context.setThreads(threads)
        //     })
        this.context.handleGetThreads();
    }

    handleChange = e => {
        this.setState({
            value: this.category.current.value,
        })

        let value = this.category.current.value;

        let filteredThreads = this.context.fullThreads.filter(thread => {
            return (thread.category === value)
        })

        if (value === 'None') {
            this.context.handleGetThreads();
        } else {
            this.context.setSearchThreads(filteredThreads);
        }

    }

    //handleFilterChange
    //receive value from state
    //filter feed posts by value in render?
    //    {postings.filter(posting => posting.category_id === value)).map(filteredPosting => (
    //     <li>
    //       {filteredPosting}
    //     </li>
    //    ))}

    //the user who asks the question is responsible for labelling the question answered or unanswered
    //
    //handleLikeCheckboxChange = event =>
    //this.setState({ checked: event.target.checked })
    //
    //handleWatchCheckboxChange = event =>
    //this.setState({ 
    //  checked: event.target.checked
    //  added: true
    //})
    //
    // render() {
    // return (
    // <div>
    //     <label>
    //       <Checkbox checked={this.state.checked} onChange={this.handleLikeCheckboxChange} />
    //       <span>Like</span>
    //     </label>
    // </div>
    // <div>
    //     <label>
    //       <Checkbox checked={this.state.checked} onChange={this.handleWatchCheckboxChange} />
    //       <span>Add To Watch List</span>
    //     </label>
    // </div>
    // )
    // }

    showInputOverlay = () => {
        this.context.toggleOverlay();
    }

    render() {
        const { threads } = this.context;

        const threadsList = threads.map(thread => {
            return <li className="tl-header" key={thread.id}>
                <Link className='threadId' to={'/thread/' + thread.id} key={thread.id}>
                    <div className="tl-header-content">
                        <div className="tl-pic-container">
                            <img src="https://via.placeholder.com/100" alt='prop' className="tl-pic"></img>
                        </div>
                        {/* <div className="tl-name-container"> */}
                        <h2 className="hw-name">{thread.user_name}</h2>
                        {/* </div> */}
                        {/* <div className="tl-title-container"> */}
                        <h3 className="tl-title"><i>{thread.title}</i></h3>
                    </div>
                    <p className='tl-content'>{thread.content}</p>
                    {/* </div> */}
                </Link>
                <div className='tl-options'>
                    <Button className='feed-btn'>Like</Button>
                    <div className='tl-likes'>10</div>
                    {/* {thread likes variable} */}
                    <Button className='feed-btn'>Add To Watch List</Button>
                </div>
            </li>
        })

        return (
            <section className='dash-item'>
                <div className="np-main-container">
                    <div className="np-container">
                        <h2 className="np-header">Need help?</h2>
                        <div className="np-input" onClick={this.showInputOverlay}>
                            <i>Ask a question!</i>
                        </div>
                    </div>
                </div>
                <div className='dash-select'>
                    <Label htmlFor='cat-select' className='category-select-label'>Filter By Category</Label>
                    <select id="category" className='cat-select' value={this.state.value} onChange={this.handleChange} ref={this.category}>
                        <option value='None'>No Filter</option>
                        <option value='Woodworking'>Woodworking</option>
                        <option value='Metalworking'>Metalworking</option>
                        <option value='Needlecraft'>Needlecraft</option>
                        <option value='Automotive'>Automotive</option>
                        <option value='Home Improvement'>Home Improvement</option>
                        <option value='General Crafts'>General Crafts</option>
                        <option value='Electronics'>Electronics</option>
                        <option value='Outdoorsmanship'>Outdoorsmanship</option>
                    </select>
                </div>
                <ul className='tl-main-container'>
                    {threadsList}
                </ul>
            </section>
        )
    }
}