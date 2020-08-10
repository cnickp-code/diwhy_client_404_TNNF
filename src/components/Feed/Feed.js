import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import DashContext from '../../contexts/DashContext'
import { Label } from '../Util/Util'
import './Dashboard.css'

export default class Feed extends Component {
    // static contextType = DashContext;

    handleChange(e) {
        this.setState({
            value: e.target.value,
        })
     }

    render() {
        return (
                <section className='dash-item'>
                    <h3>Feed</h3>
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
                </section>
        )
    }
}