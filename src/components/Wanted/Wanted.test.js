import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Wanted from './Wanted';

it('renders the Wanted page', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Wanted /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });