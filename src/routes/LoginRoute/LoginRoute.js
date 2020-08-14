import React, { Component } from 'react'
import Login from '../../components/Login/Login'
import AppContext from '../../contexts/AppContext'

class LoginRoute extends Component {
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
      <Login onLoginSuccess={this.handleLoginSuccess} />
    );
  }
}

export default LoginRoute
