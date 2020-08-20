import React, { Component } from 'react'
import { Button, Textarea, Label, Input } from '../Util/Util';
// Not using this component
export default class HelpWantedPostingForm extends Component {
     constructor(props) {
          super(props);
          this.state = { value: '' };

          this.handleChange = this.handleChange.bind(this);
     }

     handleSubmit() {
          console.log('Submitted')
     }

     //Postingservice postPosting
     //id, title, content

     handleChange(e) {
          this.setState({
               value: e.target.value,
          })
     }

     render() {
          return (
               <form className='Help_Wanted_Posting_Form' onSubmit={this.handleSubmit}>
                    <fieldset className='Help_Wanted_Posting_Form'>
                         <legend>Ask For Help</legend>
                         <Label htmlFor='hw-select'>Project Category</Label>
                         {/* Dropdown featuring list of categories*/}
                         <select value={this.state.value} onChange={this.handleChange}>
                              <option value='Woodworking'>Woodworking</option>
                              <option value='Metalworking'>Metalworking</option>
                              <option value='Needlecraft'>Needlecraft</option>
                              <option value='Automotive'>Automotive</option>
                              <option value='Home Improvement'>Home Improvement</option>
                              <option value='General Crafts'>General Crafts</option>
                              <option value='Electionics'>Electionics</option>
                              <option value='Outdoorsmanship'>Outdoorsmanship</option>
                         </select>
                         {/* Selection of category affects the handleSubmit */}

                         <Label htmlFor='hw-title-input'>Project Title</Label>
                         <Input htmlFor='hw-title-input' placeholder='Project Title' name='hw-title-input' id='hw-title-input' />

                         <Label htmlFor='hw-textarea'>Describe Your Project</Label>
                         <Textarea placeholder='Project Description' name='hw-textarea' id='hw-textarea' />
                         {/* I imagine whatever goes in this goes in the 'content' part of the database */}

                         {/* Upload form for relevant photos? (stretch goal I assume) */}
                         <Button type='submit'>Submit</Button>
                    </fieldset>
               </form>
          )
     }
}