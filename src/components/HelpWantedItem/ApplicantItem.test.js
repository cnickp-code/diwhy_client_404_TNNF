import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApplicantItem from './ApplicantItem';
import AppContext from '../../contexts/AppContext';

it('renders the ApplicantItem', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AppContext.Provider value={{ applicants: [], postings: [], user: {} }}><ApplicantItem applicant={{}} key={1} user={{}} posting={{}} /></AppContext.Provider></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
