import React, { Component } from 'react'
import Registration from '../../components/Registration/Registration'

class RegistrationRoute extends Component {
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
        {/* <p className='intro'>Info about the app here!</p> */}
      </section>
    );
  }
}

export default RegistrationRoute
