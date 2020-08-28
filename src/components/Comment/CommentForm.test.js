import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CommentForm from './CommentForm';

it('renders the CommentForm', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><CommentForm /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });