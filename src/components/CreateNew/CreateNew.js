import React, { Component } from 'react'


export default class CreateNew extends Component {
     render() {
          return (
               <select>
                    <option value='helpwanted'>Help Wanted Listing</option>
                    <option value='question'>Question</option>
                    <option value='successstory'>Success Story</option>
               </select>
          )
     }
}