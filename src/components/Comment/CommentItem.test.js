import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CommentItem from './CommentItem';
import App from '../../App';
import { AppProvider } from '../../contexts/AppContext';

it('renders the CommentItem', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AppProvider><App><CommentItem /></App></AppProvider></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});