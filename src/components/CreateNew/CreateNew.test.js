import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CreateNew from './CreateNew';

it('renders the CreateNew', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><CreateNew /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });