/**
 * Import, variables, actions..
 */
import {createStore} from "redux";
import reducerRoot from "../reducers/reducerRoot";

/**
 * Declare store
 */
const store = createStore(reducerRoot);

export default store;