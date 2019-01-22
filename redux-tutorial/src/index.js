import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import allReducers from './reducers';
// a provider provides access to the app to connect to the store
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

const store = createStore(
  allReducers,
  {
    products: [{ name: 'iPhone' }],
    user: 'Michael'
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log('Store created with initial state: ', store.getState());

// const updateUserAction = {
//   type: 'updateUser',
//   payload: {
//     name: 'John'
//   }
// };

// store.dispatch(updateUserAction);
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App lastName='Kulkarni' />
  </Provider>,
  document.getElementById('root')
);
