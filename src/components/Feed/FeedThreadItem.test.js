import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FeedThreadItem from './FeedThreadItem';

it('renders the FeedThreadItem', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><FeedThreadItem /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });