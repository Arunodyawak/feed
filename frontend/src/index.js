import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import CreateReport from './FeedbackForm';
import Reporthome from './reporthome'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes} from 'react-router-dom'

import Viewreport from "./viewreport";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CreateReport></CreateReport>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
