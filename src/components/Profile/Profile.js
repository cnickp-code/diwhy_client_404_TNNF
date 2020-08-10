import React, { Component } from 'react';
import { Section, Label } from '../Util/Util';
import UserContext from '../../contexts/UserContext';

export default class Profile extends Component {
     constructor(props) {
          super(props);
          this.state = { value: '' };

          this.handleChange = this.handleChange.bind(this);
     }
     
     static contextType = UserContext;

     handleChange(e) {
          this.setState({
              value: e.target.value,
          })
       }

     renderUser() {
          const { user } = this.context
          return <div className='profile-user'>
               <h2 className='User_Name' id='header'>{user.user_name}</h2>
               <h2 className='User_Name' id='header'>{user.email}</h2>
          </div>
     };

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
          return (
               <Section className='Profile'>
                    {content}
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
                         
                    </div>
               </Section>
          );
     };
};