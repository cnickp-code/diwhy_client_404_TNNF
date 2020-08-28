import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PostApplicantForm from './PostApplicantForm';

it('renders the PostApplicantForm', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><PostApplicantForm /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });