import React from 'react';
import ReactDOM from 'react-dom';
//! Step 1: import createStore from redux
import { createStore } from 'redux';
import './index.css';
import App from './App';

//! Step2: create a store. Note that the store also accepts an initial state
//! as its second argument We need to pass a reducer function to the store
const store = createStore(reducer);
// now lets see the state of our store. Since we have returned just 'State',
// that should be printed on the console.
console.log(store.getState());

//! Step3: create a basic reducer
function reducer(state, action) {
  if (action.type === 'changeState') {
    return action.payload.newState;
  }
  return 'State';
}

//! Step4: Lets learn how to dispatch an action. For that, we need to know how
//! to create an 'Action' which is basically an object with a type and a
//! payload (which will be an object with new state)
const action = {
  type: 'changeState',
  payload: {
    newState: 'New State'
  }
};

//! Step5: Let's send this action to the store by invoking Store.dispatch
store.dispatch(action);

console.log(store.getState());

//! Step6: Next, lets see how a reducer reads an action to update the store
//! state. Reducers have two parameters - the inital state of the reducer and
//! the action. Reducers listen each action and hence it is necessary for them
//! to figure out what to do differently for each action

ReactDOM.render(<App />, document.getElementById('root'));

//! In real world, the store will not store a string but an object. So lets
//! create a store with two objects: products and user
