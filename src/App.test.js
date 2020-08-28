import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
});
