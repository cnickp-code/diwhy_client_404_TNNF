import React, { Component } from 'react'
import { Button, Textarea, Label, Input } from '../Util/Util';

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
                         <Label htmlFor='Help_Wanted_Posting_Select'>Project Category</Label>
                         {/* Dropdown featuring list of categories*/}
                         <select value={this.state.value} onChange={this.handleChange}>
                              <option value='Woodworking'>Woodworking</option>
                              <option value='Metalworking'>Metalworking</option>
                              <option value='Needlecraft'>Needlecraft</option>
                              <option value='Automotive'>Automotive</option>
                              <option value='HomeImprovement'>Home Improvement</option>
                              <option value='GeneralCrafts'>General Crafts</option>
                              <option value='Outdoorsmanship'>Outdoorsmanship</option>
                         </select>
                         {/* Selection of category affects the handleSubmit */}

                         <Label htmlFor='Help_Wanted_Posting_Title_Input'>Project Title</Label>
                         <Input htmlFor='Help_Wanted_Posting_Title_Input' placeholder='Project Title' name='Help_Wanted_Posting_Title_Input' id='Help_Wanted_Posting_Title_Input' />

                         <Label htmlFor='Help_Wanted_Posting_Textarea'>Describe Your Project</Label>
                         <Textarea placeholder='Project Description' name='Help_Wanted_Posting_Textarea' id='Help_Wanted_Posting_Textarea' />
                         {/* I imagine whatever goes in this goes in the 'content' part of the database */}

                         {/* Upload form for relevant photos? (stretch goal I assume) */}
                         <Button type='submit'>Submit</Button>
                    </fieldset>
               </form>
          )
     }
}