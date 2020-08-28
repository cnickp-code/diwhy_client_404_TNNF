import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MobileNavInput from './MobileNavInput';

it('renders the MobileNavInput', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><MobileNavInput /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });