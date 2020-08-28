import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApplicantItem from './ApplicantItem';

it('renders the ApplicantItem', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><ApplicantItem /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });