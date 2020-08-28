import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HelpWantedOverlay from './HelpWantedOverlay';

it('renders the HelpWantedOverlay', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><HelpWantedOverlay /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });