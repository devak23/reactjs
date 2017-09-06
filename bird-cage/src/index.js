import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// css downloaded from: https://github.com/thomaspark/bootswatch
// import './media/css/flatly-bootstrap.min.css';
import './media/css/cosmo-bootstrap.min.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from "mobx-react";
import BirdStore from "./stores/BirdStore";

const Root = (
  <Provider BirdStore={BirdStore}>
    <App/>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
