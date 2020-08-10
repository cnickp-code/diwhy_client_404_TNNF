import React from 'react';
import Login from '../Components/Login/Login';
import UserContext from '../../context/UserContext';
import { Section } from '../Components/Util/Util';


export default class LoginPage extends React.Component {
     static defaultProps = {
          location: {},
          history: {
               push: () => { },
          },
     };

     static contextType = UserContext

     handleLoginSuccess = () => {
          const { location, history } = this.props;
          const destination = (location.state || {}).from || '/'
          // this.context.setLoginStatus(true)
          history.push(destination)
     };

     render() {
          return (
               <Section className='Login_Form_Container'>
                    <Login onLoginSuccess={this.handleLoginSuccess} />
               </Section>
          );
     };

}

