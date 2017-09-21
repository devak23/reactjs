import axios from 'axios';

export default {
  user: {
    // the login on successful will contain email and JWT token
    login: credentials =>
      axios.post('/api/auth', { credentials }).then(res => res.data.user),
    signup: user =>
      axios.post('/api/users', { user }).then(res => res.data.user),
    confirm: token =>
      axios
        .post('/api/auth/confirmation', { token })
        .then(res => res.data.user),
    resetPassword: email =>
      axios
        .post('/api/auth/resetPasswordRequest', { email })
        .then({ success: true }),
  },
};
