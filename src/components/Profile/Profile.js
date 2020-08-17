import React, { Component } from 'react';
import { Section, Label } from '../Util/Util';
import AppContext from '../../contexts/AppContext';
import { Link } from 'react-router-dom';
import TokenService from '../../Services/token-service';
import './Profile.css'

export default class Profile extends Component {
     constructor(props) {
          super(props);
          this.state = { value: '' };

          this.handleChange = this.handleChange.bind(this);
     }

     static contextType = AppContext;

     handleChange(e) {
          this.setState({
               value: e.target.value,
          })
     }

     renderUser() {
          const { user } = this.context
          return <div className='profile-user'>
               <h2 className='User_Name' id='header'>Username: {user.user_name}</h2>
               <h2 className='User_Email' id='header'>Email: {user.email}</h2>
               <h2 className='User_Endorsements' id='header'>Endorsements: {user.endorsements}</h2>
          </div>
     };

     renderEditLink() {
          return <div className='edit-link'>
               <Link to='/edit'>Edit Profile</Link>
          </div>
     }

     render() {
          const { error } = this.context;
          let content;
          if (error) {
               content = (error.error === 'User does not exist')
                    ? <p className='Red_Alert'>User not found.</p>
                    : <p className='Red_Alert'>There was an error.</p>
          }
          else {
               content = this.renderUser()
          }
          //Add way to select expertise, and degree of expertise
          return (
               <Section className='profile-wrapper'>
                    {content}
                    {TokenService.hasAuthToken() ? this.renderEditLink() : ''}
                    <div className='profile-cat-div'>
                         <Label id='header'>Choose your Categories</Label>
                         <select className='profile-cat-select' value={this.state.value} onChange={this.handleChange}>
                              <option value='Woodworking'>Woodworking</option>
                              <option value='Metalworking'>Metalworking</option>
                              <option value='Needlecraft'>Needlecraft</option>
                              <option value='Automotive'>Automotive</option>
                              <option value='HomeImprovement'>Home Improvement</option>
                              <option value='GeneralCrafts'>General Crafts</option>
                              <option value='Outdoorsmanship'>Outdoorsmanship</option>
                         </select>
                    </div>
                    <div className='profile-projects'>
                         {/* the users respective project spotlights */}
                    </div>
               </Section>
          );
     };
};