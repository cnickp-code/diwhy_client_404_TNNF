import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApplicantItem from './ApplicantItem';
import { AppProvider } from '../../contexts/AppContext';
import App from '../../App';


it('renders the ApplicantItem', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AppProvider><App><ApplicantItem /></App></AppProvider></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});