import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import { AppProvider } from '../../contexts/AppContext';

it('renders the Dashboard', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <AppProvider>
        <Dashboard width={1} />
      </AppProvider>
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});