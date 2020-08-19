import React from 'react'
import headerfullmedium from '../image-assets/header-full-medium.png'
import subheader from '../image-assets/sub-header-medium.png'
import './SplashPage.css'

class SplashPage extends React.Component {
    render() {
        return (
            <div className='splash-wrapper'>
                <div id='splash' className='get-started'>
                    <div className='logo-wrapper'>
                        <img src={headerfullmedium} alt='logo'/>
                        <img src={subheader} alt='sub-logo'/>
                    </div>
                    <div className='started-info'>
                        <h1 className='splash-header'>A community of Creators, Creating</h1>
                        <h3>And maybe making a buck or two while they're at it.</h3>
                    </div>
                </div>
                <div id='splash' className='goals-wrapper'>
                    <h3>What is DIWHY?</h3>
                    <p>DIWHY is an online platform made for folks interested in crafts of any sort, of any level of experience.
                    </p>
                </div>
                <div id='splash' className='blueprint'>
                    <h3>Learn by example from hobbiests and professionals alike.</h3>
                    <p>We hope that our service will give aspiring craftsmen a venue to learn, grow inspired by other projects,
                        and generally give them a blueprint to success! Anyone can Google a question, but we aim 
                        one step further, letting you do it yourself, with genuine help!
                    </p>
                </div>
                <div id='splash' className='how-to-use'>
                    <h3>Our Service</h3>
                    <p>Is simple and easy to navigate. We offer our users a way to create threads,
                        to foster discussion on a topic or to get feedback or answers to questions
                        that may be roadblocks on their 'do it yourself' experience, and Help Wanted
                        posts, which are meant to facilitate skilled assistance on a project.
                    </p>
                </div>
            </div>
        )
    }
}

export default SplashPage