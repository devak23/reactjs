import { USER_LOGGED_IN } from '../types';

// a reducer is just a function that takes in an action and returns a new state
export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;

    default:
      return state;
  }
}
