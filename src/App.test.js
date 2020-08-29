import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AppContext, { AppProvider } from './contexts/AppContext';

it('renders', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><AppProvider.Consumer><App /></AppProvider.Consumer></BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
});
