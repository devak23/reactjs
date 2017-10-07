import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';
import App from './App';
import rootReducer from './rootReducer';
import { userLoggedIn } from './actions/auth';
import setAuthorizationHeader from './utils/setAuthorizationHeader';

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

// check if the localstorage contains a JWT token. If so, create a user object
// containing the token and pass it to the userLoggedIn method inside the store's
// dispatch method to redux

if (localStorage.bookwormJWT) {
  const payload = jwtDecode(localStorage.bookwormJWT);
  const user = {
    token: localStorage.bookwormJWT,
    email: payload.email,
    confirmed: payload.confirmed,
    firstname: localStorage.firstname,
    lastname: localStorage.lastname,
  };
  setAuthorizationHeader(localStorage.bookwormJWT);
  store.dispatch(userLoggedIn(user));
}

// The react-router enables us to navigate between pages. So we import the
// BrowserRouter and enclose the <App/> component inside it. What we are essentially
// doing is wrapping the React app 'App' with a Provider passing the redux store
// as a parameter.
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
