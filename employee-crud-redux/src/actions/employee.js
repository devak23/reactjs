import api from '../api';
import { EMPLOYEES_LOADED, EMPLOYEE_SELECTED } from '../constants';

export const employeesLoaded = employees => ({
  type: EMPLOYEES_LOADED,
  employees,
});

export const employeeSelected = employee => ({
  type: EMPLOYEE_SELECTED,
  employee,
});

export const fetchEmployee = empno => dispatch =>
  api.employee
    .fetchEmployee(empno)
    .then(emp => dispatch(employeeSelected(emp)));

export const loadEmployees = () => dispatch =>
  api.employee
    .loadEmployees()
    .then(employees => dispatch(employeesLoaded(employees)));
