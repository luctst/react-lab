import tasksReducer from "./tasks/tasksReducer";
import {combineReducers} from "redux";
const rootReducer = combineReducers({
    tasksReducer,
});

export default rootReducer;
