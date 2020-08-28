import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HelpWantedItem from './HelpWantedItem';

it('renders the HelpWantedItem', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><HelpWantedItem /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });