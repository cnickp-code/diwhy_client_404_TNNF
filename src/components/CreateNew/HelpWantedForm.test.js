import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HelpWantedForm from './HelpWantedForm';

it('renders the HelpWantedForm', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><HelpWantedForm /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });