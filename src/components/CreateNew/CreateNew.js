import React, { Component } from 'react'
import { Label } from '../Util/Util'
import HelpWantedPostingForm from './HelpWantedPostingForm'
import ProjectSuccessStoryForm from './ProjectSuccessStoryForm'
import QuestionForm from './QuestionForm'


export default class CreateNew extends Component {
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

     renderSwitch() {
          switch (this.state.value) {
               case 'helpwanted':
                    return <HelpWantedPostingForm />;
               case 'question':
                    return <QuestionForm />;
               case 'success':
                    return <ProjectSuccessStoryForm />;
               default: return `${this.state.value}`
          }
     }

     render() {
          return (
               <div className='Create_New_Container'>
                    <form>
                    <Label>
                         Create New:
                    </Label> 
                    <select value={this.state.value} onChange={this.handleChange}>
                         <option value=''>Create New</option>
                         <option value='helpwanted'>Help Wanted Listing</option>
                         <option value='question'>Question</option>
                         <option value='success'>Success Story</option>
                    </select>
                    </form>
                    {this.renderSwitch(this.state.value)}
               </div>
          )
     }
}