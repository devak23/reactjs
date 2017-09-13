import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import rootReducer from './rootReducer';

/**
* The application submits a form that makes a synchronous request to the server.
* To do that we use the redux-thunk actions (with side effects).
* The createStore creates a redux store which is the core of redux to store the
* state tree. The 'applyMiddleware' allows us to use the thunk middleware.
* The 'Provider' abstraction allows us to connect React with redux.
*/
const store = createStore(
  rootReducer, // this is the whole state tree/object. This will be used via the combiners
  composeWithDevTools(applyMiddleware(thunk)),
);

// The react-router enables us to navigate between pages. So we import the
// BrowserRouter and enclose the <App/> component inside it. What we are essentially
// doing is wrapping the React app 'App' with a Provider passing the redux store
// as a parameter.
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
