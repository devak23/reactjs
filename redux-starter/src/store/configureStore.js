import { legacy_createStore as createStore } from 'redux';
import reducer from "./tasks";

const configureStore = createStore(reducer);

export default configureStore;
