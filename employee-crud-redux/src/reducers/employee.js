import { EMPLOYEES_LOADED, EMPLOYEE_SELECTED } from '../constants';

const initialState = () => ({
  all: [],
  selectedEmployee: {},
});

export default function(state = initialState(), action = {}) {
  switch (action.type) {
    case EMPLOYEES_LOADED:
      return { ...state, all: action.employees };
    case EMPLOYEE_SELECTED:
      return { ...state, selectedEmployee: action.selectedEmployee };
    default:
      return state;
  }
}
