import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CommentList from './CommentList';
import AppContext from '../../contexts/AppContext';


it('renders the CommentList', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><AppContext.Provider><CommentList key={1} /></AppContext.Provider></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });