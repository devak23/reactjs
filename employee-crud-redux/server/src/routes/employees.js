import express from 'express';
import Employee from '../models/employee';
import Department from '../models/department';

const router = express.Router();

router.get('/', (req, res) => {
  Employee.find().then(employees => {
    res.json(employees);
  });
});

router.get('/fetch_employee', (req, res) => {
  let selectedEmployee = {};
  Employee.findOne({ empno: req.query.q }).then(emp => {
    if (emp) {
      Department.findOne({ deptno: emp.deptno })
        .then(dept => {
          selectedEmployee = emp;
          selectedEmployee.department = dept;
          console.log(selectedEmployee);
          res.json(selectedEmployee);
        })
        .catch(err => res.status(400).json('No department found!'));
    } else {
      res.status(400).json('No employee was found for that id');
    }
  });
});

export default router;
