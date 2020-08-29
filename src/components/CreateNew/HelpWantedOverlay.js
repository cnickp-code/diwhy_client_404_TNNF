import React from 'react';
import AppContext from '../../contexts/AppContext';
import HelpWantedForm from './HelpWantedForm';

export default class HelpWantedOverlay extends React.Component {

    static contextType = AppContext;

    render() {
        return (
            <>
                <div className="overlay-container" >
                    <HelpWantedForm />
                </div>
            </>
        );
    };
};