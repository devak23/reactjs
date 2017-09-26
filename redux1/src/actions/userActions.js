import { USER_SELECTED } from '../constants';

const selectUser = user => ({
  type: USER_SELECTED,
  payload: user,
});

export default selectUser;
