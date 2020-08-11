import React, { Component } from 'react'
import { Input } from '../Util/Util'
        
    // y
export default class MobileNavInput extends Component {
     render() {
          return (
               <form className='Mobile_Nav_Input'>
                    <Input htmlFor='Mobile_Nav_Input' placeholder='Search' name='Mobile_Nav_Input' id='Mobile_Nav_Input' />
               </form>
          )
}
}