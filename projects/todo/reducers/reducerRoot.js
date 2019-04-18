/**
 * Import, variables
 */
import reducerTaskList from "./reducerTaskList";
import {combineReducers} from "redux";

/**
 * Create the root reducer
 */
const rootReducer = combineReducers({
    reducerTaskList,
});

export default rootReducer;
