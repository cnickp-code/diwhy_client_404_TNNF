import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProjectSpotlightItem from './ProjectSpotlightItem';

it('renders the ProjectSpotlightItem', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><ProjectSpotlightItem /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });