import express from 'express';
import Employee from '../models/employee';

const router = express.Router();

router.get('/', (req, res) => {
  Employee.find().then(employees => {
    res.json(employees);
  });
});

router.get('/fetch_employee', (req, res) => {
  Employee.findOne({ empno: req.query.q }).then(selectedEmp =>
    res.json(selectedEmp),
  );
});

export default router;
