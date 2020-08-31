import React, { Component } from 'react'
import { Button, Textarea, Label } from '../Util/Util'

export default class QuestionForm extends Component {
     constructor(props) {
          super(props)
          this.state = { value: '' }
          this.handleChange = this.handleChange.bind(this)
     }
     //pretty sure we don't use this anymore
     handleSubmit() {
     }

     handleChange(e) {
          this.setState({
               value: e.target.value,
          })
     }

     render() {
          return (
               <form className='New_Question_Form' onSubmit={this.handleSubmit}>
                    <fieldset className='New_Question_Form'>
                         <legend>Ask A Question</legend>
                         <Label htmlFor='New_Question_Select'>Project Category</Label>
                         {/* Dropdown featuring list of categories*/}
                         <select className='New_Question_Select' value={this.state.value} onChange={this.handleChange}>
                              <option value='Woodworking'>Woodworking</option>
                              <option value='Metalworking'>Metalworking</option>
                              <option value='Needlecraft'>Needlecraft</option>
                              <option value='Automotive'>Automotive</option>
                              <option value='Home Improvement'>Home Improvement</option>
                              <option value='General Crafts'>General Crafts</option>
                              <option value='Electronics'>Electronics</option>
                              <option value='Outdoorsmanship'>Outdoorsmanship</option>
                         </select>
                         <Label htmlFor='New_Question_Textarea'>New Question</Label>
                         <Textarea placeholder='Ask a question...' name='New_Question_Textarea' id='New_Question_Textarea' />
                         <Button type='submit'>Submit</Button>
                    </fieldset>

               </form>
          )
     }
}