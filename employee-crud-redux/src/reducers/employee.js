import { EMPLOYEES_LOADED } from '../constants';

export default function(state = {}, action = {}) {
  switch (action.type) {
    case EMPLOYEES_LOADED:
      return action.employees;
    default:
      return state;
  }
}
