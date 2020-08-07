import React from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import TokenService from '../../Services/token-service';
import AuthApiService from '../../Services/auth-api-service';
import { Button, Input, Label } from '../Util/Util';

export default class Login extends React.Component {

     static defaultProps = {
          onLoginSuccess: () => { }
     };

     static contextType = UserContext

     state = { error: null };

     firstInput = React.createRef()

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

     componentDidMount() {
          this.firstInput.current.focus()
        }

     render() {
          const { error } = this.state;
          return (
               <form className='Login_Form' onSubmit={this.handleSubmitJWTAuth}>
                    <div role='alert'> {error && <p className='Red_Alert'> {error.message} </p>} </div>

                    <fieldset className='Login_Form'>

                         <legend>Log In</legend>

                         <Label htmlFor='Login_Form_Email'> Email </Label>

                         <Input placeholder='Email' name='email' id='Login_Form_User_Email' ref={this.firstInput} required />

                         <Label htmlFor='Login_Form_User_Password'> Password </Label>

                         <Input type='password' placeholder='Password' name='password' id='User_Password' required />

                         <Button type='submit'> Log In </Button>

                         <Link to='forgotpassword'>Forgot Your Password?</Link>
                    </fieldset>
               </form>
          );
     };
};