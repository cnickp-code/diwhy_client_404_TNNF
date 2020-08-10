import React from 'react';
import Registration from '../components/Registration/Registration';
import { Section } from '../components/Util/Util';

export default class SignUpPage extends React.Component {

     static defaultProps = {
          history: {
               push: () => { },
          },
     };

     handleSignUpSuccess = user => {
          const { history } = this.props;
          history.push('/login')
     };

     render() {
          return (
               <Section className='SignUp_Form_Container'>
                    <Registration onSignUpSuccess={this.handleSignUpSuccess} />
               </Section>
          );
     };
};