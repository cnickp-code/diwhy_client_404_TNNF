import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FeedThreadItem from './FeedThreadItem';
import { AppProvider } from '../../contexts/AppContext';

it('renders the FeedThreadItem', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AppProvider><FeedThreadItem key={1} thread={{}} /></AppProvider></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
