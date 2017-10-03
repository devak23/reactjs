import api from '../api';
import { EMPLOYEES_LOADED } from '../types';

export const employeesLoaded = employees => ({
  type: EMPLOYEES_LOADED,
  employees,
});

export const loadEmployees = () => dispatch =>
  api.employee.loadEmployees().then(emps => {
    console.log('EmployeeAction:: loadEmployees:: emps ==>', emps);
    return dispatch(employeesLoaded(emps));
  });
