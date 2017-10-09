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
    resetPasswordRequest: email =>
      axios
        .post('/api/auth/reset_password_request', { email })
        .then({ success: true }),
    validateToken: token => axios.post('/api/auth/validate_token', { token }),
    resetPassword: data => axios.post('/api/auth/reset_password', { data }),
  },
  book: {
    addBook: book =>
      axios.post('/api/books', { book }).then(res => res.data.status),
    loadBooks: () => axios.get('/api/books').then(res => res.data.books),
  },
};
