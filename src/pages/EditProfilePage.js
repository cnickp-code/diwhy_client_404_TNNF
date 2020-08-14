import React from 'react';
import EditUserForm from '../components/EditUserForm/EditUserForm';
import { Section } from '../components/Util/Util';
// import { Redirect } from 'react-router-dom';
import TokenService from '../Services/token-service';
import AppContext from '../contexts/AppContext';

export default class EditProfilePage extends React.Component {

     static contextType = AppContext;

     static defaultProps = {
          history: {
               push: () => { },
          },
     };

     handleEditSuccess = user => {
          const userId = (TokenService.readJwtToken().user_id);
          const { history } = this.props;
          history.push(`/user/${userId}`)
     };

     handleClickCancel = () => {
          this.props.history.push('/')
     };

     render() {
          // if (!this.context.loggedIn)
          //      return <Redirect to='/' />;
          return (
               <Section className='Edit_Form_Container'>
                    <EditUserForm onEditSuccess={this.handleEditSuccess} handleClickCancel={this.handleClickCancel} />
               </Section>
          );
     };
}