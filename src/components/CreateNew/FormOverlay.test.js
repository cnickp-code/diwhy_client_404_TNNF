import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FormOverlay from './FormOverlay';

it('renders the FormOverlay', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><FormOverlay /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });