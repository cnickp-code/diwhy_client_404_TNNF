import React from 'react';
import { Button, Input, Required } from '../Util/Util';
import AuthApiService from '../../Services/auth-api-service';
import TokenService from '../../Services/token-service';

import config from '../../config';
import AppContext from '../../contexts/AppContext';
import { Link } from 'react-router-dom';

export default class EditUserForm extends React.Component {
     static defaultProps = {
          onEditSuccess: () => { },
          handleClickCancel: () => { }
     };

     static contextType = AppContext;

     state = {
          error: null,
          id: '',
          user_name: '',
          email: ''
          // insert other params here
     }

     componentDidMount() {
          fetch(config.API_ENDPOINT + '/user', {
               method: 'GET',
               headers: {
                    'authorization': `Bearer ${TokenService.getAuthToken()}`
               }
          })
               .then(res => {
                    if (!res.ok)
                         return res.json().then(error => Promise.reject(error))
                    return res.json()
               })
               .then(responseData => {
                    this.setState({
                         id: responseData.id,
                         user_name: responseData.user_name,
                         email: responseData.email,

                         // insert other params here
                    })
               })
               .catch(error => {
                    console.error(error)
                    this.setState({ error })
               });
     }

     handleSubmit = e => {
          e.preventDefault();
          const { user_name, email } = e.target;

          this.setState({ error: null })
          AuthApiService.updateUser({
               //insert params
               user_name: user_name.value,
               email: email.value
          })
               .then(user => {
                    //insert param.value = '' fields here
                    user_name.value = ''
                    email.value = ''
                    this.props.onEditSuccess()
               })
               .then()
               .catch(res => {
                    this.setState({ error: res.error })
               });
     };

     render() {
          const { error, id, user_name, email } = this.state;
          const user = { id, user_name, email }
          return (
               <form className='DIWHY_Edit_Form' onSubmit={this.handleSubmit} user={user}>
                    <div role='alert'> {error && <p className='Red_Alert'> {error.message} </p>} </div>
                    <fieldset>
                         <legend>Edit Profile</legend>

                         <label htmlFor='user_name'>Username<Required /></label>
                         <Input type='user_name' name='user_name' id='user_name' defaultValue={this.state.user_name} required />

                         <Link to='/changepassword'>Change Your Password</Link>

                         <Button type='submit'>Submit</Button>

                         <Button type='reset' onClick={this.props.handleClickCancel}>Cancel</Button>

                    </fieldset>
               </form>
          )
     }
}