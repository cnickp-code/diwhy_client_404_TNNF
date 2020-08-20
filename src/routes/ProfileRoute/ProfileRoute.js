import React, { Component } from 'react'
import Profile from '../../components/Profile/Profile'
// import { AppProvider } from "../../contexts/AppContext";

class ProfileRoute extends Component {


  render() {
    return (
      <section>
          <Profile user_name={this.props.match.params.user_name} />
      </section>
    );
  }
}

export default ProfileRoute
