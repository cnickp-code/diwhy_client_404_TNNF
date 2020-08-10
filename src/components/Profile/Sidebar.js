import React, { Component } from 'react';
import { Section } from '../Util/Util';
import UserContext from '../../contexts/UserContext';

export default class ProfileSidebar extends Component {
     static defaultProps = {
          match: { params: {} },
     };
     
     static contextType = UserContext;

     renderUser() {
          const { user } = this.context
          return <div className='User_Profile_Sidebar_Container'>
               <h2 className='User_Name' id='header'>{user.user_name}</h2>
               <h2 className='User_Email' id='header'>{user.email}</h2>
               <h2 className='User_Email' id='header'>Questions Asked: </h2>
               <h2 className='User_Email' id='header'>Questions Answered: </h2>
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