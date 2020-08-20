import React from 'react';
import AppContext from '../../contexts/AppContext';
import './ProjectSpotlight.css';

export default class ProjectSpotlightItem extends React.Component {
    render() {
        return (
            <>
                <div className="ps-main-container">
                    <div className="ps-img"> </div>
                    <div className="ps-bottom-container">
                        <h2 className="ps-title">Title</h2>
                        <p className="ps-date">Date Created</p>
                    </div>
                </div>
            </>
        )
    }
}