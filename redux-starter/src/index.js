import store from './store';
import {addTask, completeTask, removeTask} from './actions';

const unsubscribe = store.subscribe(() => {
  console.log('Updated: ', store.getState());
});

//To add task
store.dispatch(addTask('Create Project Plan'));
console.log('State after adding Task = ', store.getState());

store.dispatch(addTask('Another task'));
store.dispatch(completeTask(1));

//To remove task
store.dispatch(removeTask(0));

console.log('State after removing task = ', store.getState());
