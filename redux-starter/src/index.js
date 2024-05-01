import store from './store/configureStore';
import { addTask, completeTask, removeTask, fetchTodo } from './store/tasks';

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
store.dispatch(fetchTodo());
console.log('State after removing task = ', store.getState());
