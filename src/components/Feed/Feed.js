import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../contexts/AppContext'
import { Label } from '../Util/Util'
import './Feed.css'
import Watch from '../Watch/Watch'

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
            console.log()
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

    render() {
        const { threads } = this.context;

        const threadsList = threads.map(thread => {
            return <li className="tl-header" key={thread.id}>
                <Link className='threadId' to={'/thread/' + thread.id} key={thread.id}>
                    {/* <div className="tl-pic-container">
                        <img src="https://via.placeholder.com/100" alt='prop' className="tl-pic"></img>
                    </div> */}
                    {/* <div className="tl-header-content"> */}
                    {/* <div className="tl-name-container"> */}
                    <h2 className="hw-name">{thread.user_name}</h2>
                    {/* </div> */}
                    {/* <div className="tl-title-container"> */}
                    <h3 className="tl-title"><i>{thread.title}</i></h3>
                    {/* </div> */}
                    {/* <div className='tl-options'>
                            <div>Like</div>
                            <div>Unanswered</div>
                            <div>Add To Watch List</div>
                        </div> */}
                    {/* </div> */}
                </Link>
            </li>
        })

        return (
            <section className='dash-item'>
                <h3 className='feed-title'>Your Feed</h3>
                <div className='dash-select'>
                    <Label htmlFor='Feed_Category_Select' className='category-select-label'>Filter By Category</Label>
                    <select id="category" className='Feed_Category_Select' value={this.state.value} onChange={this.handleChange} ref={this.category}>
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
                    {/* <div className="tl-item-container"> */}
                    {threadsList}
                    {/* </div> */}
                </ul>
                <Watch className='dash-watchlist' />
            </section>
        )
    }
}