import React from 'react';
import AppContext from '../../contexts/AppContext';
import NewPostForm from './NewPostForm';

class FormOverlay extends React.Component {
    static contextType = AppContext;

    closeOverlay = () => {
        this.context.toggleOverlay();
    }
    render() {
        return (
            <>

                <div className="overlay-container" onClick={this.closeOverlay}>
                    <NewPostForm />
                </div>
            </>
        )
    }
}

export default FormOverlay;