import { USER_LOGGED_IN } from '../types';
import api from '../api';


export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user
})

export const login = credentials => (dispatch) =>
  api.user.login(credentials) // make an API request
  .then(user => dispatch(userLoggedIn(user))) // dispatch redux action
