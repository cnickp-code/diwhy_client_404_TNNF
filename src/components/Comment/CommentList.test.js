import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CommentList from './CommentList';
import AppContext, { AppProvider } from '../../contexts/AppContext';


it('renders the CommentList', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AppProvider><CommentList key={1} comments={[]} /></AppProvider></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
