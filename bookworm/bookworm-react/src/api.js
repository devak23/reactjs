import axios from 'axios';

export default {
  user: {
    // the login on successful will contain email and JWT token
    login: credentials =>
      axios.post('/api/auth', { credentials }).then(res => res.data.user),
  },
};
