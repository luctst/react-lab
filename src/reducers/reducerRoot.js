/**
 * Import, variables
 */
import reducerTaskList from "../reducers/reducerTaskList";
import {combineReducers} from "redux";

/**
 * Create the root reducer
 */
const rootReducer = combineReducers({
    reducerTaskList,
});

export default rootReducer;