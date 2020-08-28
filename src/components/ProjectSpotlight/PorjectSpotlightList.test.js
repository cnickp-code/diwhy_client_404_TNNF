import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProjectSpotlightList from './ProjectSpotlightList';

it('renders the ProjectSpotlightList', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><ProjectSpotlightList /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });