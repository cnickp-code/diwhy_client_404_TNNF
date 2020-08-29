import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CommentItem from './CommentItem';
import { AppProvider } from '../../contexts/AppContext';

it('renders the CommentItem', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AppProvider><CommentItem key={1} comment={{}} /></AppProvider></BrowserRouter >, div);
  ReactDOM.unmountComponentAtNode(div);
});
