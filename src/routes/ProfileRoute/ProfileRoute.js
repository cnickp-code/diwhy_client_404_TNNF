import React, { Component } from 'react'
import Profile from '../../components/Profile/Profile'
import { UserProvider } from "../../contexts/UserContext";

class ProfileRoute extends Component {


  render() {
    return (
      <section>
        <UserProvider>
          <Profile />
        </UserProvider>
      </section>
    );
  }
}

export default ProfileRoute
