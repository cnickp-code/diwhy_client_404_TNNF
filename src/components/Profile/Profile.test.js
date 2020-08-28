import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Profile from './Profile';

it('renders the Profile', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Profile /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });