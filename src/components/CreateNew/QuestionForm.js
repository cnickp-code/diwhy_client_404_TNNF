import React, { Component } from 'react'
import { Button, Textarea, Label } from '../Util/Util';

export default class QuestionForm extends Component {

     //handleSubmit

     render() {
          return (
               <form className='Question_Form'>
                    <fieldset className='Question_Form'>
                         <legend>Ask A Question</legend>
                         <Label htmlFor='New_Question_Textarea'>New Question</Label>
                         <Textarea placeholder='Ask a question...' name='New_Question_Textarea' id='New_Question_Textarea' />
                         <Button type='submit'>Submit</Button>
                    </fieldset>

               </form>
          )
     }
}