/**
 * Import, variables, actions..
 */
import {createStore} from "redux";
import rootReducer from "../reducers/reducerRoot";

/**
 * Declare store
 */
const store = createStore(rootReducer);

export default store;