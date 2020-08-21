import React from 'react';
import { Spring, Transition } from 'react-spring/renderprops';
import './Intro.css';
import logo from '../../image-assets/header-full-medium.png'
import IntroContainer from './IntroContainer';
import AuthApiService from '../../Services/auth-api-service';
import AppContext from '../../contexts/AppContext';
import { Redirect } from 'react-router-dom';

class Intro extends React.Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            profile_pic: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
            interests: {},
            forward: false,
        }

        this.woodworking = React.createRef();
    }

    componentDidMount() {
        AuthApiService.getUserInfo(this.context.user.user_name) 
            .then(user => {
                let newUser = {
                    ...user,
                    userId: user.id
                }
                this.context.setUserInfo(newUser);
            })
    }

    handleNextStep = () => {
        let newStep = this.state.step + 1;
        this.setState({
            step: newStep
        })
    }

    handleAddInterest = (e) => {
        e.preventDefault();

        console.log('interests', this.state.interests);

        let interests = []
        for (const [key, value] of Object.entries(this.state.interests)) {
            if (value === true) {
                interests.push(key);
            }
        }
        console.log(interests);

        let newStep = this.state.step + 1;
        this.setState({
            step: newStep
        })

        let updatedInfo = {
            profile_pic: this.context.user.profile_pic,
            intro: true,
            endorsements: this.context.user.endorsements,
            email: this.context.user.email
        }

        setTimeout(() => {
            AuthApiService.updateUserInfo(this.context.user.id, updatedInfo)
                .then(res => {
                    this.context.modifyUserIntro(true);
                    this.setState({
                        forward: true
                    })
                })
        }, 1200)
    }

    handleInterests = (e) => {
        const val = e.target.checked;
        const name = e.target.name;

        let updatedInterests = Object.assign({}, this.state.interests, { [name]: val })
        this.setState({
            interests: updatedInterests
        })

    }

    render() {
        let step = this.state.step;
        let img;

        let stepOneItems = []
        let stepFourItems = [];
        let stepFiveItemsLeft = [];
        let stepFiveItemsRight = [];

        if(this.state.forward) {
            return <Redirect to="/" />
        }


        if (step === 1) {
            stepOneItems.push(<h1 className="intro-header">Welcome</h1>)
            stepOneItems.push(<h1 className="intro-header">To</h1>)
            stepOneItems.push(<p className="text-center"> <img src={logo} className="intro-logo" alt='logo' /></p>)

            // STEP ONE BACKGROUND IMAGE
            img = 'https://media.lifehack.org/wp-content/uploads/2013/02/diy-projects-740x416.jpeg';
        }


        if (step === 2 || step === 3) {
            while (stepOneItems.length > 0) {
                stepOneItems.pop();
            }
            img = 'https://media.lifehack.org/wp-content/uploads/2013/02/diy-projects-740x416.jpeg';
        }

        if (step === 4) {
            img = 'https://media.lifehack.org/wp-content/uploads/2013/02/diy-projects-740x416.jpeg';
        }

        if (step === 5) {
            img = 'https://media.lifehack.org/wp-content/uploads/2013/02/diy-projects-740x416.jpeg';
        }

        if (step === 6) {
            img = 'https://media.lifehack.org/wp-content/uploads/2013/02/diy-projects-740x416.jpeg';
        }

        let newItems = stepOneItems.map((item, i) => {
            return <IntroContainer key={i} component={item} />
        })


        return (
            <div className="intro-main-container" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
                <div className="white-overlay">
                    <div className="intro-inner-container">

                        <div className="intro-step-one">
                            <Transition
                                items={newItems} keys={item => item.key}
                                from={{ opacity: 0, transform: 'scale(0)' }}
                                enter={{ opacity: 1, transform: 'scale(1)' }}
                                leave={{ opacity: 0, transform: 'scale(0)' }}
                                config={{ duration: 500 }}
                                trail={250}
                            >
                                {item => props => <div style={props}>{item}</div>}
                            </Transition>

                            {(step === 2 || step === 3) &&
                                <Spring
                                    from={{ opacity: 0, transform: 'translate3d(300%, 0, 0)' }}
                                    to={{ opacity: 1, transform: 'translate3d(0%, 0, 0)' }}
                                    config={{ delay: 750, duration: 1000 }}
                                >
                                    {props => (
                                        <div style={props} >
                                            <h2 className="intro-step2-header">What is DIWHY?</h2>
                                            {(step === 2) && <p className="intro-step2-body">DI(WH)Y stands for Do It Yourself (With Help). It is an online platform made for folks interested in crafts of any sort, of any level of experience.</p>}
                                            {(step === 3) &&
                                                <Spring
                                                    from={{ opacity: 0, transform: 'translate3d(-300%, 0, 0)' }}
                                                    to={{ opacity: 1, transform: 'translate3d(0%, 0, 0)' }}
                                                    config={{ delay: 250, duration: 1000 }}
                                                >
                                                    {props => (
                                                        <div style={props} >
                                                            <p className="intro-step2-body">We hope that our service will give aspiring craftsmen a venue to learn, grow, and be inspired by other projects!</p>

                                                        </div>
                                                    )}
                                                </Spring>
                                            }
                                        </div>
                                    )}
                                </Spring>
                            }
                            {(step === 4) &&
                                <div className="step4-container">
                                    <Spring
                                        from={{ opacity: 0, transform: 'scale(0)' }}
                                        to={{ opacity: 1, transform: 'scale(1)' }}
                                        config={{ delay: 500, duration: 250 }}
                                    >
                                        {props => (
                                            <div style={props} >
                                                <h3 className="intro-step4-header">Ask Questions!</h3>
                                            </div>
                                        )}
                                    </Spring>
                                    <Spring
                                        from={{ opacity: 0, transform: 'scale(0)' }}
                                        to={{ opacity: 1, transform: 'scale(1)' }}
                                        config={{ delay: 1000, duration: 250 }}
                                    >
                                        {props => (
                                            <div style={props} >
                                                <h3 className="intro-step4-header-right">Share A Project!</h3>
                                            </div>
                                        )}
                                    </Spring>
                                    <Spring
                                        from={{ opacity: 0, transform: 'scale(0)' }}
                                        to={{ opacity: 1, transform: 'scale(1)' }}
                                        config={{ delay: 1500, duration: 250 }}
                                    >
                                        {props => (
                                            <div style={props} >
                                                <h3 className="intro-step4-header">Connect For Help!</h3>
                                            </div>
                                        )}
                                    </Spring>
                                </div>
                            }

                            {(step === 5) &&
                                <div>
                                    <h1 className="text-center step5-header">Get Started</h1>
                                    <h3 className="text-center">Click what you are interested in</h3>
                                    <form id="step5-form" onSubmit={e => this.handleAddInterest(e)}>
                                        <div className="step5-container">
                                            <div className="step5-inner">
                                                <input type="checkbox" id="woodworking" name="Woodworking" value="Woodworking" onChange={this.handleInterests} />
                                                <label htmlFor="woodworking" className="wood-label">Woodworking</label>

                                                <input type="checkbox" id="metalworking" name="Metalworking" value="Metalworking" onChange={this.handleInterests} />
                                                <label htmlFor="metalworking" className="metal-label">Metalworking</label>

                                                <input type="checkbox" id="needlecraft" name="Needlecraft" value="Needlecraft" onChange={this.handleInterests} />
                                                <label htmlFor="needlecraft" className="needle-label">Needlecraft</label>

                                                <input type="checkbox" id="automotive" name="Automotive" value="Automotive" onChange={this.handleInterests} />
                                                <label htmlFor="automotive" className="auto-label">Automotive</label>
                                            </div>
                                            <div className="step5-inner">
                                                <input type="checkbox" id="home-imp" name="Home Improvement" value="Home Improvement" onChange={this.handleInterests} />
                                                <label htmlFor="home-imp" className="home-label">Home Improvement</label>

                                                <input type="checkbox" id="gen-craft" name="General Crafts" value="General Crafts" onChange={this.handleInterests} />
                                                <label htmlFor="gen-craft" className="craft-label">General Crafts</label>

                                                <input type="checkbox" id="electronics" name="Electronics" value="Electronics" onChange={this.handleInterests} />
                                                <label htmlFor="electronics" className="electronics-label">Electronics</label>

                                                <input type="checkbox" id="outdoorsmanship" name="Outdoorsmanship" value="Outdoorsmanship" onChange={this.handleInterests} />
                                                <label htmlFor="outdoorsmanship" className="outdoors-label">Outdoors</label>
                                            </div>
                                        </div>
                                        <p className="text-center">
                                            <button type="submit" className="hw-btn">Confirm</button>
                                        </p>
                                    </form>
                                </div>
                            }

                            {(step === 6) &&
                                <div className="step6-container">
                                    <h1 className="step6-header">Happy Crafting!!</h1>
                                </div>
                            }

                        </div>


                        {!(step === 5 || step === 1 || step === 6) && <div className="btn-container">
                            <button className="hw-btn" onClick={this.handleNextStep}>Next</button>
                        </div>}

                        {(step === 1) && <Spring
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}
                            config={{ delay: 1000, duration: 250 }}
                        >
                            {props => (
                                <div style={props} >
                                    <div className="btn-container">
                                        <button className="hw-btn" onClick={this.handleNextStep}>Next</button>
                                    </div>

                                </div>
                            )}
                        </Spring>}

                    </div>
                </div>
            </div>
        )
    }
}

export default Intro;