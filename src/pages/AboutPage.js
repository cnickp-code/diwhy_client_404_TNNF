import React, { Component } from 'react';
import { Section } from '../Components/Util/Util';

export default class AboutPage extends Component {
     render() {
          return (
               <div className='About_Page_Container'>
                    <Section className='About_Section'>
                         <h3 className='About_Header'>About DIWHY</h3>
                         <p className='About_Paragraph'>
                              DIWHY is a hub for those looking for help from hobbyists and professionals in their DIY endeavors and projects.
                         </p>
                    </Section>
               </div>
          )
     }
}