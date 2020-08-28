import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HelpWantedPostingForm from './HelpWantedPostingForm';

it('renders the HelpWantedPostingForm', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><HelpWantedPostingForm /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });