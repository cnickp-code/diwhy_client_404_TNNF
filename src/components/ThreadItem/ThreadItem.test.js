import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThreadItem from './ThreadItem';
import AppContext from '../../contexts/AppContext';

it('renders the Thread Item', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <AppContext.Provider value={{ handleGetThreads: () => console.log('test') }}>
      <ThreadItem />
    </AppContext.Provider >
  </BrowserRouter >, div);
  ReactDOM.unmountComponentAtNode(div);
});