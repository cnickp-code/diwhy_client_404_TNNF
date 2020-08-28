import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CommentList from './CommentList';
import App from '../../App';
import { AppProvider } from '../../contexts/AppContext';

it('renders the CommentList', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AppProvider><App><CommentList /></App></AppProvider></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});