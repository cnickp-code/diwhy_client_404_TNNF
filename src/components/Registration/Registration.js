import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Required, Label, Button } from '../Util/Util'
import AuthApiService from '../../Services/auth-api-service'
import './Registration.css'

class Registration extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { user_name, email, password, confirm_password } = ev.target

    if(confirm_password.value !== password.value){
        return 'Passwords did not match'
    }

    AuthApiService.postUser({
      user_name: user_name.value,
      email: email.value,
      password: password.value,
      confirm_password: confirm_password.value,
    })
      .then(user => {
        user_name.value = ''
        email.value = ''
        password.value = ''
        confirm_password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state
    return (
      <form className='reg-form'
        onSubmit={this.handleSubmit}>
        <fieldset> 
        <legend>Sign Up</legend>
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <div className='label-input'>
          <Label htmlFor='registration-user_name-input'>
            Choose a Username<Required />
          </Label>
          <Input
            ref={this.firstInput}
            id='registration-user_name-input'
            name='user_name'
            required
          />
        </div>
        <div className='label-input'>
          <Label htmlFor='registration-email-input'>
            Enter Valid Email<Required />
          </Label>
          <Input
            id='registration-email-input'
            name='email'
            required
          />
        </div>
        <div className='label-input'>
          <Label htmlFor='registration-password-input'>
            Choose a password<Required />
          </Label>
          <Input
            id='registration-password-input'
            name='password'
            type='password'
            required
          />
        </div>
        <div className='label-input'>
          <Label htmlFor='registration-password-confirm'>
            Confirm password<Required />
          </Label>
          <Input
            id='registration-password-confirm'
            name='confirm_password'
            type='password'
            required
          />
        </div>
        <div className='reg-submit-div'>
          <Button className='solo-button' type='submit'>
            Sign up
          </Button>
          {' '}
          <Link to='/login'>Already have an account?</Link>
        </div>
        </fieldset> 
      </form>
    )
  }
}

export default Registration;
