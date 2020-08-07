import React, { Component } from 'react';
import { Section } from '../Util/Util';
import UserContext from '../../contexts/UserContext';

export default class Profile extends Component {
     static defaultProps = {
          match: { params: {} },
     };
     
     static contextType = UserContext;

     renderUser() {
          const { user } = this.context
          return <div className='User_Profile_Container'>
               <h2 className='User_Name'>{user.user_name}</h2>
               <h2 className='User_Name'>{user.email}</h2>
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
               </Section>
          );
     };
};