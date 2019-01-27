const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'user:loggedIn':
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
