import React, { Component } from 'react';
// import { Section, Label } from '../Util/Util';
import AppContext from '../../contexts/AppContext';
import { Link } from 'react-router-dom';
// import TokenService from '../../Services/token-service';
import AuthApiService from '../../Services/auth-api-service';
import ProjectSpotlightList from '../ProjectSpotlight/ProjectSpotlightList';
import InterestsApiService from '../../Services/interests-api-service'
import './Profile.css'

export default class Profile extends Component {
     constructor(props) {
          super(props);
          this.state = {
               value: '',
               user: null,
               loading: true,
               interests: [],
          };

          this.handleChange = this.handleChange.bind(this);
     }

     static contextType = AppContext;

     componentDidMount() {
          AuthApiService.getUserInfo(this.props.user_name)
               .then(user => {
                    console.log(user)
                    this.setState({
                         loading: false,
                         user
                    })
               })
          
          InterestsApiService.getInterestsByUserName(this.props.user_name)
               .then(interests => {
                    console.log(interests);
                    this.setState({
                         interests
                    })
               })
     }

     handleChange(e) {
          this.setState({
               value: e.target.value,
          })
     }

     renderUser() {
          const { user } = this.state
          return <div className='profile-user'>
               <h2 className='User_Name' id='header'>Username: {user.user_name}</h2>
               <h2 className='User_Email' id='header'>Email: {user.email}</h2>
               {/* <h2 className='User_Endorsements' id='header'>Endorsements: {user.endorsements}</h2> */}
          </div>
     };

     renderEditLink() {
          return <div className='edit-link'>
               <Link to='/edit'>Edit Profile</Link>
          </div>
     }

     render() {
          const { user } = this.state

          let specs = this.state.interests.map(int => {
               return int.category;
          }).join(', ');

          console.log(specs);
          return (
               <>
                    {!this.state.loading &&
                         <div className="profile-main-container">
                              <div className="profile-top-splash">
                                   <div className="profile-bottom-splash">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" className="profile-pic" alt='profile-pic' />
                                        <div className='profile-user'>
                                             <h2 className='User_Name text-right' id='header'>Username: {user.user_name}</h2>
                                             <h2 className='User_Email text-right' id='header'>Email: {user.email}</h2>
                                             {/* <h2 className='User_Endorsements' id='header'>Endorsements: {user.endorsements}</h2> */}
                                        </div>
                                   </div>
                              </div>
                              <div className="profile-info-container">
                                   <div className="profile-info-left">
                                        Specialties: {specs}
                                   </div>
                                   <div className="profile-info-right">
                                        <div className="endorsement"><i class="fas fa-thumbtack"></i>{' '} 21</div>
                                        <div><i class="fas fa-users"></i>{' '}Add Friend</div>
                                   </div>
                              </div>

                              <div className="profile-section">
                                   <h1 className="profile-header">Project Spotlight</h1>
                                   <ProjectSpotlightList />
                              </div>
                              <div className="profile-section">
                                   <h1 className="profile-header">Recent Activity</h1>
                              </div>
                         </div>
                    }
               </>
          )
     }

     // render() {
     //      const { error } = this.context;
     //      let content;
     //      if (error) {
     //           content = (error.error === 'User does not exist')
     //                ? <p className='Red_Alert'>User not found.</p>
     //                : <p className='Red_Alert'>There was an error.</p>
     //      }
     //      else {
     //           content = this.renderUser()
     //      }

     //      console.log(this.props.user_name);
     //      //Add way to select expertise, and degree of expertise
     //      return (
     //           <Section className='profile-wrapper'>
     //                {content}
     //                {TokenService.hasAuthToken() ? this.renderEditLink() : ''}
     //                <div className='profile-cat-div'>
     //                     <Label id='header'>Choose your Categories</Label>
     //                     <select className='profile-cat-select' value={this.state.value} onChange={this.handleChange}>
     //                          <option value='Woodworking'>Woodworking</option>
     //                          <option value='Metalworking'>Metalworking</option>
     //                          <option value='Needlecraft'>Needlecraft</option>
     //                          <option value='Automotive'>Automotive</option>
     //                          <option value='HomeImprovement'>Home Improvement</option>
     //                          <option value='GeneralCrafts'>General Crafts</option>
     //                          <option value='Outdoorsmanship'>Outdoorsmanship</option>
     //                     </select>
     //                </div>
     //                <div className='profile-projects'>
     //                     the users respective project spotlights
     //                </div>
     //           </Section>
     //      );
     // };
};