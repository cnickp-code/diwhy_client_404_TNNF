import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Thread from './Thread';
import App from '../../App';
import { AppProvider } from '../../contexts/AppContext';

it('renders the Thread', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AppProvider>
        <App>
          <Thread />
        </App>
      </AppProvider>
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});