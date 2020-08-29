import React, { Component } from 'react'
import Login from '../../components/Login/Login'
import AppContext from '../../contexts/AppContext'

export default class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  static contextType = AppContext

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <section className='log-route-section'>
        <h2 className='reg-log-header' id='header'>Login</h2>
        <Login onLoginSuccess={this.handleLoginSuccess} />
        <p>Be our guest! Credentials:<br />
          Email: demo@demo.com<br />
          Username: DemoUser<br />
          Password: Password1!</p>
        <p className='intro'>You'll find the hammer to your nail here!</p>
      </section>
    )
  }
}