import React from 'react';
import { render } from 'react-dom';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

render (
  <div className="container">
    <App />
  </div>
, document.querySelector('#root'));