import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../contexts/AppContext';
import AuthApiService from '../../Services/auth-api-service';
import { Button, Input, Label } from '../Util/Util';
import './Login.css'

export default class Login extends React.Component {

     static defaultProps = {
          onLoginSuccess: () => { }
     };

     static contextType = AppContext

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
                    this.context.processLogin(res.authToken)
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

                    <fieldset className='log-field'>
                         <div className='label-input'>
                              <Label htmlFor='Login_Form_Email'> Email </Label>
                              <Input placeholder='Email' name='email' id='Login_Form_User_Email' ref={this.firstInput} required />
                         </div>
                         <div className='label-input'>
                              <Label htmlFor='Login_Form_User_Password'> Password </Label>
                              <Input type='password' placeholder='Password' name='password' id='User_Password' required />
                         </div>
                         <div className='log-submit-div'>
                              <Button className='log-btn' type='submit'>
                                   Log In
                              </Button>
                              <Link className='already-link' to='/register'>No Account? Register Here</Link>
                         </div>
                    </fieldset>
               </form>
          );
     };
};