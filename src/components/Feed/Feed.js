import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import AppContext from '../../contexts/AppContext'
import { Label } from '../Util/Util'
import ThreadsApiService from '../../Services/threads-api-service';
import './Feed.css'

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            threads: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    static contextType = AppContext

    componentDidMount() {
        this.context.clearError()
        const threads = ThreadsApiService.getThreads()
        this.setState({ threads })
    }

    handleChange(e) {
        this.setState({
            value: e.target.value,
        })
    }

    render() {
        const { threads } = this.state;
        console.log(threads)

        const threadsList = threads.map(thread => {
            return <div className="tl-header" key={thread.id}>
                <div className="tl-pic-container">
                    <img src="https://via.placeholder.com/100" className="tl-pic"></img>
                </div>
                <div className="tl-header-content">
                    <div className="tl-name-container">
                        <h2 className="hw-name">{this.context.user.user_name}</h2>
                    </div>
                    <div className="tl-title-container">
                        <h3 className="tl-title"><i>{thread.title}</i></h3>
                    </div>
                    <div className='tl-options'>
                        <div>Like</div>
                        <div>Unanswered</div>
                        <div>Add To Watch List</div>
                    </div>
                </div>

            </div>
        })

        return (
            <section className='dash-item'>
                <h3 id='header'>Feed</h3>
                <Label htmlFor='Feed_Category_Select'>Filter By Category</Label>
                <select className='Feed_Category_Select' value={this.state.value} onChange={this.handleChange}>
                    <option value='Woodworking'>Woodworking</option>
                    <option value='Metalworking'>Metalworking</option>
                    <option value='Needlecraft'>Needlecraft</option>
                    <option value='Automotive'>Automotive</option>
                    <option value='HomeImprovement'>Home Improvement</option>
                    <option value='GeneralCrafts'>General Crafts</option>
                    <option value='Outdoorsmanship'>Outdoorsmanship</option>
                </select>
                <div className='tl-main-container'>
                    <div className="tl-item-container">
                        {threadsList}
                    </div>
                </div>
            </section>
        )
    }
}