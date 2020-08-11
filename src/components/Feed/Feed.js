import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import AppContext from '../../contexts/AppContext'
import { Label } from '../Util/Util'

export default class Feed extends Component {
     constructor(props) {
          super(props);
          this.state = { value: '' };

          this.handleChange = this.handleChange.bind(this);
     }
    // static contextType = AppContext;

    handleChange(e) {
        this.setState({
            value: e.target.value,
        })
     }

    render() {
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
                </section>
        )
    }
}