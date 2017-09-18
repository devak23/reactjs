import api from '../api';
import { userLoggedIn } from './auth';

const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.bookwormJWT = user.token;
    localStorage.firstname = user.firstname;
    localStorage.lastname = user.lastname;

    dispatch(userLoggedIn(user))
  });

export default signup;
