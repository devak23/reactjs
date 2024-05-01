import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import reducer from "./tasks";
import {thunk} from "redux-thunk";

const configureStore = createStore(reducer, applyMiddleware(thunk));

export default configureStore;
