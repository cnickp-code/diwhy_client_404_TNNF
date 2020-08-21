import React from 'react';
import AppContext from '../../contexts/AppContext';
import HelpWantedForm from './HelpWantedForm';

class HelpWantedOverlay extends React.Component {
    static contextType = AppContext;


    render() {
        return (
            <>

                <div className="overlay-container" >

                    <HelpWantedForm />
                </div>
            </>
        )
    }
}

export default HelpWantedOverlay;