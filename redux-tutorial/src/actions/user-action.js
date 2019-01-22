export const UPDATE_USER = 'user:updateUser';

const updateUser = newUser => {
  console.log('user-action invoked with newUser: ', newUser);
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  };
};

export default updateUser;
