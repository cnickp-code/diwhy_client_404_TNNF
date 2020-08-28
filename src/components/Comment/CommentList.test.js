import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CommentList from './CommentList';

it('renders the CommentList', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><CommentList /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });