import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NewPostForm from './NewPostForm';

it('renders the NewPostForm', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><NewPostForm /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });