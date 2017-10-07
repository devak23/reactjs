import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';
import setAuthorizationHeader from '../utils/setAuthorizationHeader';

import api from '../api';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user,
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT,
});

// a thunk action is just a function which returns another function
export const login = credentials => dispatch =>
  api.user
    .login(credentials) // make an API request.
    // if the API call is successful, dispatch redux action
    .then(user => {
      // save the Token into the local storage (browser)
      localStorage.bookwormJWT = user.token;
      localStorage.firstname = user.firstname;
      localStorage.lastname = user.lastname;
      setAuthorizationHeader(user.token);
      // dispatch redux action
      dispatch(userLoggedIn(user));
    });

export const logout = () => dispatch => {
  localStorage.removeItem('bookwormJWT');
  localStorage.removeItem('lastname');
  localStorage.removeItem('firstname');
  setAuthorizationHeader();
  dispatch(userLoggedOut());
};

export const confirm = token => dispatch =>
  api.user.confirm(token).then(user => {
    localStorage.bookwormJWT = user.token;
    localStorage.firstname = user.firstname;
    localStorage.lastname = user.lastname;
    dispatch(userLoggedIn);
  });

export const resetPasswordRequest = ({ email }) => () =>
  api.user.resetPasswordRequest(email);

export const validateToken = token => () => api.user.validateToken(token);

export const resetPassword = data => () => api.user.resetPassword(data);
