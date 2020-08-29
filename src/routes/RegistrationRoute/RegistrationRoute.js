import React, { Component } from 'react'
import Registration from '../../components/Registration/Registration'

export default class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className='reg-route-section'>
        <h2 className='reg-log-header' id='header'>Sign Up</h2>
        <Registration
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
        <p className='intro'>You'll find the hammer to your nail here!</p>
      </section>
    )
  }
}