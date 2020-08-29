import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Thread from './Thread';
import { AppProvider } from '../../contexts/AppContext';

it('renders the Thread', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <AppProvider >
      <Thread value={{ handleGetThreads: () => console.log('test') }} />
    </AppProvider>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
