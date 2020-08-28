import React from 'react';
import Intro from './Intro';

export default class IntroContainer extends React.Component {
    render() {
        return (
            <>
                {this.props.component}
            </>
        );
    };
};