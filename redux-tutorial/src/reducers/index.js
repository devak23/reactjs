import { combineReducers } from 'redux';
import productsReducer from './producer-reducer';
import userReducer from './user-reducer';

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

export default allReducers;
