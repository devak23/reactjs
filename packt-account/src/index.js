import React from 'react';
import ReactDOM from 'react-dom';
import store from './components/others/store';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
