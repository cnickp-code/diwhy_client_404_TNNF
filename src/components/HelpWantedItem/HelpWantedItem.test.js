import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HelpWantedItem from './HelpWantedItem';
import { AppProvider } from '../../contexts/AppContext';

it('renders the HelpWantedItem', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AppProvider><HelpWantedItem /></AppProvider></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});