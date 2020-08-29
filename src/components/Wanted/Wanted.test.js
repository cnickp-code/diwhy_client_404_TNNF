import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Wanted from './Wanted';
import AppContext, { AppProvider } from '../../contexts/AppContext';

it('renders the Wanted page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AppProvider><Wanted /></AppProvider></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});