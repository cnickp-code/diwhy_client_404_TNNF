import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';
import { AppProvider } from '../../contexts/AppContext';

it('renders the Dashboard', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AppProvider.Consumer><Dashboard /></AppProvider.Consumer></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});