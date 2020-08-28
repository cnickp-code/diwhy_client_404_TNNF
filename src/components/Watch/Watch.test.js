import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Watch from './Watch';

it('renders the Watch component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Watch /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });