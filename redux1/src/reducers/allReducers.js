import { combineReducers } from 'redux';
import users from './users';
import activeUser from './activeUser';

const allReducers = combineReducers({ users, activeUser });

export default allReducers;
