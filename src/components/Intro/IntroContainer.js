import React from 'react';
import Intro from './Intro';

class IntroContainer extends React.Component {
    render() {
        return (
            <>
                {this.props.component}
            </>
        )
    }
}

export default IntroContainer