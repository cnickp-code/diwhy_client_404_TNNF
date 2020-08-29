import React from 'react';
// import AppContext from '../../contexts/AppContext';
import ProjectSpotlightItem from './ProjectSpotlightItem';
import './ProjectSpotlight.css';

export default class ProjectSpotlightList extends React.Component {
    render() {
        return (
            <div className='ps-list-container'>
                <ProjectSpotlightItem />
                <ProjectSpotlightItem />
                <ProjectSpotlightItem />
                <ProjectSpotlightItem />
                <ProjectSpotlightItem />
                <ProjectSpotlightItem />
            </div>
        );
    };
};
