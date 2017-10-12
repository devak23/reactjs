import axios from 'axios';

export default {
  employee: {
    loadEmployees: () => axios.get('/api/v1/employees').then(res => res.data),
    fetchEmployee: empno =>
      axios.get(`/api/v1/employees/${empno}`).then(res => res.data),
  },
};
