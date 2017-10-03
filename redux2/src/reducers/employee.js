import { EMPLOYEES_LOADED, EMPLOYEE_SELECTED } from '../types';

export default function(state = {}, action = {}) {
  switch (action.type) {
    case EMPLOYEES_LOADED:
      console.log('EmployeeReducer:: EMPLOYEES_LOADED::  ]]===> ', action);
      return action.employees;
    case EMPLOYEE_SELECTED:
      return action.activeEmployee;
    default:
      return state;
  }
}
