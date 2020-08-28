import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Thread from './Thread';
import AppContext from '../../contexts/AppContext';

it('renders the Thread', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AppContext.Provider value={{ handleGetThreads: () => console.log('test') }}><Thread threads={[]} /></AppContext.Provider></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
