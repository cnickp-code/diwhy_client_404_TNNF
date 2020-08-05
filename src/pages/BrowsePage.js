import {React, Component} from 'react';
import { Label } from '../Components/Utils/Utils';
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
               <>
                    <form className='Browse_List_Filter'>
                         <Label htmlFor='Browse_List_Filter' Filter By Category />
                    </form>
               </>
          )
     }
}