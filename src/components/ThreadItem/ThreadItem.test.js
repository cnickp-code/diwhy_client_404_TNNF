import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThreadItem from './ThreadItem';

it('renders the Thread Item', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><ThreadItem /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });