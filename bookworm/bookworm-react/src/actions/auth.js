import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';

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
      // dispatch redux action
      dispatch(userLoggedIn(user));
    });

export const logout = () => dispatch => {
  localStorage.removeItem('bookwormJWT');
  localStorage.removeItem('lastname');
  localStorage.removeItem('firstname');
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
  api.user.resetPassword(email);

export const validateToken = token => () => api.user.validateToken(token);
