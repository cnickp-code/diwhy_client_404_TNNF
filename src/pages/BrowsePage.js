import {React, Component} from 'react';
import { Section, Input } from '../Components/Utils/Utils';
import UserContext from '../../contexts/UserContext'

export default class Browse extends Component {

     state = {
          searchTerm: '',
          categories: []
     };

     static contextType = UserContext;

     componentDidMount() {
          this.context.clearError()
          CategoryService.getCategories()
               .then(this.context.setCategories)
          .catch(this.context.setError)
     }

     editSearchTerm = (e) => {
          this.setState({
               searchTerm: e.target.value
          });
     };

     render() {
          return (

          )
     }
}