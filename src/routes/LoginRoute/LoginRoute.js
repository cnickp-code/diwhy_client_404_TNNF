import React, { Component } from 'react'
import Login from '../../components/Login/Login'
import UserContext from '../../contexts/UserContext'

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  static contextType = UserContext

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    // this.context.processLogin()
    // console.log(this.context)
    history.push(destination)
  }

  render() {
    return (
      <section className='log-route-section'>
        <h2 className='reg-log-header'>Login</h2>
        <Login
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    );
  }
}

export default LoginRoute
