import React, { Component } from 'react';
import { Label, Input, Section } from '../components/Util/Util';
import UserContext from '../contexts/UserContext'
import CategoryService from '../Services/category-api-service'
import BrowseItem from '../components/Browse/BrowseItem'
import '../components/Browse/Browse.css'

export default class BrowsePage extends Component {

     state = {
          searchTerm: '',
          categories: []
     };

     static contextType = UserContext;

     componentDidMount() {
          this.context.clearError()
          CategoryService.getCategories()
               .then((data) => {
                    this.context.setCatergories(data)
               })
               // .then(categories => {
               //      this.setState({
               //           name: categories.name,
               //           id: categories.id
               //      });
               // })
               .catch(this.context.setError)
     }

     // CategoryService.getCategories()
     // .then((data) => {
     //   this.setCategories(data);
     // })

     editSearchTerm = (e) => {
          this.setState({
               searchTerm: e.target.value
          });
     };

     render() {
          const { error } = this.context;
          let { categories = [] } = this.context

          if (this.state.searchTerm !== '') {
               categories = categories.filter(category => category.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
          } 

          return (
               <div className='Browse_List_Container'>
                    <form className='Browse_List_Filter'>
                         <Label htmlFor='Browse_List_Filter'>Filter By Category</Label>
                         <Input
                              className='Browse_List_Filter_Input'
                              type='text'
                              placeholder='Search'
                              id='Browse_List_Filter'
                              value={this.state.searchTerm}
                              onChange={e => this.setState({ searchTerm: e.target.value })}
                         />
                    </form>

                    <Section list className='Browse_List_Page'>
                         {error
                         ? (<p className='Red_Alert'>There was an error, please try again</p>) 
                         : (categories.map(category => <BrowseItem key={category.id} category={category.name} />))}
                    </Section>
               </div>
          )
     }
}