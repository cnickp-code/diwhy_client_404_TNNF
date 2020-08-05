import React from 'react';
import { Button, Input, Required, Textarea } from '../Utils/Utils';
import AuthApiService from '../../Services/auth-api-service';
import TokenService from '../../Services/token-service';

import config from '../../config';
import UserContext from '../../contexts/UserContext';

export default class EditForm extends React.Component {
     static defaultProps = {
          onEditSuccess: () => { },
          handleClickCancel: () => { }
     };

     static contextType = UserContext;

     state = {
          error: null,
          id: '',
          // insert other params here
     }

     componentDidMount() {
          fetch(config.API_ENDPOINT + '/api/users', {
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
          const { } = e.target;

          this.setState({ error: null })
          AuthApiService.updateUser({
               //insert params
          })
               .then(user => {
                    //insert param.value = '' fields here
                    this.props.onEditSuccess()
               })
               .then()
               .catch(res => {
                    this.setState({ error: res.error })
               });
     };

     render() {
          return (
               <form className='DIWHY_Edit_Form' onSubmit={this.handleSubmit} user={user}>
                    <fieldset>
                         <legend>Edit Profile</legend>

                         <label htmlFor='user_name'>user_name <Required /></label>
                         <Input type='user_name' name='user_name' id='user_name' defaultValue={this.state.user_name} required />

                         <Link to='/changepassword'>Change Your Password</Link>

                         <Button type='submit'> Submit </Button>

                         <Button type='reset' onClick={this.props.handleClickCancel}> Cancel </Button>

                    </fieldset>
               </form>
          )
     }
}