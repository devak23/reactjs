import store from './store';
import { addTask, removeTask } from './actions';

//To add task
store.dispatch(addTask('Create Project Plan'));
console.log('State after adding Task = ', store.getState());

//To remove task
store.dispatch(removeTask(0));

console.log('State after removing task = ', store.getState());
