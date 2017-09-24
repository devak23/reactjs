import { combineReducers } from 'redux';
import user from './reducers/user';
import books from './reducers/books';

// The combineReducers is a helper function which turns an object whose values
// are different reducing functions into a single reducing function that can
// be passed to the redux store.

export default combineReducers({
  user,
  books,
});
