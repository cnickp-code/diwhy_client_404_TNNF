import React, { Component } from 'react'
import { Button, Textarea, Label, Input } from '../Util/Util';

export default class ProjectSuccessStoryForm extends Component {
     constructor(props) {
          super(props);
          this.state = { value: '' };

          this.handleChange = this.handleChange.bind(this);
     }

     handleChange(e) {
          this.setState({
               value: e.target.value,
          })
     }

     handleSubmit() {
          console.log('Submitted')
     }

     render() {
          return (
               <form className='Project_Success_Story_Form' onSubmit={this.handleSubmit}>
                    <fieldset className='Project_Success_Story_Form'>
                         <legend>Share A Project!</legend>
                         <Label htmlFor='Project_Success_Story_Select'>Project Category</Label>
                         {/* Dropdown featuring list of categories*/}
                         <select className='Project_Success_Story_Select' value={this.state.value} onChange={this.handleChange}>
                              <option value='Woodworking'>Woodworking</option>
                              <option value='Metalworking'>Metalworking</option>
                              <option value='Needlecraft'>Needlecraft</option>
                              <option value='Automotive'>Automotive</option>
                              <option value='HomeImprovement'>Home Improvement</option>
                              <option value='GeneralCrafts'>General Crafts</option>
                              <option value='Outdoorsmanship'>Outdoorsmanship</option>
                         </select>
                         <Label htmlFor='Project_Success_Story_Title_Input'>Project Title</Label>
                         <Input htmlFor='Project_Success_Story_Title_Input' placeholder='Project Title' name='Project_Success_Story_Title_Input' id='Project_Success_Story_Title_Input' />
                         <Label htmlFor='Project_Success_Story_Form_Textarea'>Project Description</Label>
                         <Textarea placeholder='Ask a question...' name='Project_Success_Story_Form_Textarea' id='Project_Success_Story_Form_Textarea' />
                         <Button type='submit'>Submit</Button>
                    </fieldset>
               </form>
          )
     }
}