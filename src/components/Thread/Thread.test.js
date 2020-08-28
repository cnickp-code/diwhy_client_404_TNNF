import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Thread from './Thread';

it('renders the Thread', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Thread /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });