import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CommentItem from './CommentItem';

it('renders the CommentItem', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><CommentItem key={1} comment={{}}/></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });