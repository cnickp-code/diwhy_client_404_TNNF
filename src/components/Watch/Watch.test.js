import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Watch from './Watch';
import { AppContext, AppProvider } from '../../contexts/AppContext';

it('renders the Watch component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AppProvider>
    <Watch /></AppProvider>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});