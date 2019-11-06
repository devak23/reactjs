import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.querySelector('#root')
);
