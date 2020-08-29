import React from 'react';
import AppContext from '../../contexts/AppContext';
import NewPostForm from './NewPostForm';

export default class FormOverlay extends React.Component {

    static contextType = AppContext;

    render() {
        return (
            <>
                <div className="overlay-container" >
                    <NewPostForm />
                </div>
            </>
        );
    };
};