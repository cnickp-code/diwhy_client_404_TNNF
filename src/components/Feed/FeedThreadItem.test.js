import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FeedThreadItem from './FeedThreadItem';

it('renders the FeedThreadItem', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><FeedThreadItem key={1} thread={{}}/></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });