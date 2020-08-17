import React, { Component } from 'react';
import { Label, Input, Section } from '../components/Util/Util';
import AppContext from '../contexts/AppContext'
import CategoryService from '../Services/category-api-service'
import ThreadsApiService from '../Services/threads-api-service'
import BrowseItem from '../components/Browse/BrowseItem'
import '../components/Browse/Browse.css'
import Tabs from '../components/Tabs/Tabs'

export default class BrowsePage extends Component {

     state = {
          searchTerm: '',
          categories: [],
          threads: [],
     };

     static contextType = AppContext;

     componentDidMount() { 
          this.context.clearError() 
          CategoryService.getCategories() 
               .then((data) => { this.context.setCategories(data) }) 
               .catch(this.context.setError) }
     // componentDidMount() {
     //      CategoryService.getCategories()
     //           .then(categories => {
     //                this.context.setCategories(categories)
     //                ThreadsApiService.getThreadByCategoryId(this.context.categories.id)
     //                     .then(thread => {
     //                      let threadCategory = this.context.categories.find(item => item.id === thread.category)
                         
     //                      const activeCategory = {
     //                          ...thread,
     //                          category: threadCategory.name
     //                      }
     //                      this.setState({
     //                          thread: activeCategory
     //                      })
     //                })
     //           })
     // }

     editSearchTerm = (e) => { this.setState({ searchTerm: e.target.value }); };

     render() {
          const { error } = this.context;
          let { categories = [] } = this.context
          if (this.state.searchTerm !== '') {
               categories = categories.filter(category => category.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
          } 
          //map through categories and for each category create a div with a label={category.name}
          //with its contents being BrowseItem with props passed based on activeTab category
          return (
               // <Tabs className='Browse_List_Container'>
               //      <div label='1'><BrowseItem /></div>
               //      <div label='2'><BrowseItem /></div>
               //      <div label='3'><BrowseItem /></div>
               //      <div label='4'><BrowseItem /></div>
               //      <div label='5'><BrowseItem /></div>
               //      <div label='6'><BrowseItem /></div>
               //      <div label='7'><BrowseItem /></div>
               //      <div label='8'><BrowseItem /></div>
               // </Tabs>

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
                         : (categories.map(category => <BrowseItem key={category.id} category={category} />))}
                    </Section>
               </div>
          )
     }
}