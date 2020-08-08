import React, { Component } from 'react'
import { Label, Input } from '../Util/Util'
import HelpWantedPostingForm from './HelpWantedPostingForm'
import ProjectSuccessStoryForm from './ProjectSuccessStoryForm'
import QuestionForm from './QuestionForm'


export default class CreateNew extends Component {
     constructor(props) {
          super(props);
          this.state = { value: '' };

          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleChange(e) {
          this.setState({
               value: e.target.value,
          })
     }

     handleSubmit(e) {
          e.preventDefault()
          //change the form that renders based on the value submitted
     }

     render() {
          return (
               <div className='Create_New_Container'>
                    <form>
                    <Label>
                         Create New:
                    </Label> 
                    <select value={this.state.value} onChange={this.handleChange}>
                         <option value='helpwanted'>Help Wanted Listing</option>
                         <option value='question'>Question</option>
                         <option value='success'>Success Story</option>
                    </select>
                     <Input type="submit" value="Submit" />
                    </form>
               </div>
          )
     }
}