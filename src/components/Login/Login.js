import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import { Button, Input, Label } from '../Util/Util';

export default class LoginForm extends React.Component {

     static defaultProps = {
          onLoginSuccess: () => { }
     };

     state = { error: null };

     handleSubmitJWTAuth = ev => {
          ev.preventDefault();
          this.setState({ error: null });
          const { email, password } = ev.target;

          AuthApiService.postLogin({
               email: email.value,
               password: password.value
          })
               .then(res => {
                    email.value = ''
                    password.value = ''
                    TokenService.saveAuthToken(res.authToken)
                    this.props.onLoginSuccess()
               })
               .catch(res => {
                    this.setState({ error: res.error })
               });
     };

     render() {
          const { error } = this.state;
          return (
               <form className='Login_Form' onSubmit={this.handleSubmitJWTAuth}>
                    <div role='alert'> {error && <p className='Red_Alert'> {error.message} </p>} </div>

                    <fieldset className='Login_Form'>

                         <legend>Log In</legend>

                         <Label htmlFor='Login_Form_Email'> Email </Label>

                         <Input placeholder='Email' name='email' id='Login_Form_User_Email' required />

                         <Label htmlFor='Login_Form_User_Password'> Password </Label>

                         <Input type='password' placeholder='Password' name='password' id='User_Password' required />

                         <Button type='submit'> Log In </Button>

                         <Link to='forgotpassword'>Forgot Your Password?</Link>
                    </fieldset>
               </form>
          );
     };
};