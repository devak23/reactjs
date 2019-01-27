import store from '../others/store';

export const userLoggedIn = user => {
  return {
    type: 'user:loggedIn',
    payload: user
  };
};

export const login = ({ email, password }) => {
  // perform the actual login process
  store.dispatch(userLoggedIn(email));
};
