import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App/';
import { AppProvider } from '../../contexts/AppContext';

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});