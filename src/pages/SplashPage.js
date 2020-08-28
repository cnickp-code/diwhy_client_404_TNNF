import React from 'react'
import { Link } from 'react-router-dom'
import headerfullmedium from '../image-assets/header-full-medium.png'
import subheader from '../image-assets/sub-header-medium.png'
import './SplashPage.css'

export default class SplashPage extends React.Component {
    render() {
        return (
            <div className='splash-wrapper'>
                <nav className='head-nav-logged-out'>
                    <Link id='left-log' className='out-link' to='/login'>Login</Link>
                    <Link className='out-link' to='/register'>Sign up</Link>
                </nav>
                <div id='splash' className='splash-head'>
                    <div className='block'></div>
                    <div className='logo-wrapper'>
                        <img className='main-logo' src={headerfullmedium} alt='logo' />
                        <img className='sub-logo' src={subheader} alt='sub-logo' />
                    </div>
                    <div className='started-info'>
                        <h1 className='splash-header'>A Community of Creators, Built for Creating</h1>
                        <h3 className='splash-sub-header'>And maybe making a buck or two while they're at it.</h3>
                    </div>
                </div>
                <div id='splash' className='goals-wrapper'>
                    <div id='light' className='splash-content'>
                        <h3>What is DIWHY?</h3>
                        <p>DIWHY is an online platform made for folks interested in crafts of any sort,
                        of any level of experience.
                        </p>
                    </div>
                </div>
                <div id='splash' className='blueprint'>
                    <div id='dark' className='splash-content'>
                        <h3>Learn by example from hobbyists and professionals alike.</h3>
                        <p>We hope that our service will give aspiring craftsmen a venue to learn, grow inspired by other projects,
                        and generally give them a blueprint to success! Anyone can Google a question, but we aim
                        one step further, letting you do it yourself, with genuine help!
                        </p>
                    </div>
                    <div className='get-started'>
                        <Link className='splash-reg' to='/register'>Sign up</Link>
                        <Link className='splash-log' to='/login'>Or Login here</Link>
                    </div>
                </div>
                <div id='splash' className='how-to-use'>
                    <div id='dark' className='splash-content'>
                        <h3>Our Service</h3>
                        <p>Is simple and easy to navigate. We offer our users a way to create threads,
                        to foster discussion on a topic or to get feedback or answers to questions
                        that may be roadblocks on their 'do it yourself' experience, and Help Wanted
                        posts, which are meant to facilitate skilled assistance on a project.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}