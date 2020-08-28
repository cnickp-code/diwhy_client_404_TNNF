import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Watch from './Watch';
import { AppProvider } from '../../contexts/AppContext';
import App from '../../App';

it('renders the Watch component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AppProvider><App><Watch /></App></AppProvider></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});