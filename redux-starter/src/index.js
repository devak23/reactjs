import store from './store';


//To add task
store.dispatch({
  type: 'ADD_TASK',
  payload: {
    task: 'This is a new Action',
  },
});
console.log('State after adding Task = ', store.getState());

//To remove task
store.dispatch({
  type: 'REMOVE_TASK',
  payload: {
    id: 0,
  },
});

console.log('State after removing task = ', store.getState());
