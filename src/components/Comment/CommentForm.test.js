import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CommentForm from './CommentForm';
import App from '../../App';
import { AppProvider } from '../../contexts/AppContext';

it('renders the CommentForm', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AppProvider><App><CommentForm /></App></AppProvider></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});