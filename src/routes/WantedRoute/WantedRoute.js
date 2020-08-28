import React, { Component } from 'react'
import Wanted from '../../components/Wanted/Wanted'

export default class WantedRoute extends Component {
  render() {
    return (
      <Wanted history={this.props.history} />
    )
  }
}