import { EMPLOYEES_LOADED, EMPLOYEE_SELECTED } from '../constants';

export default function(state = {}, action = {}) {
  switch (action.type) {
    case EMPLOYEES_LOADED:
      return action.employees;
    case EMPLOYEE_SELECTED:
      return action.selectedEmployee;
    default:
      return state;
  }
}
