import tasksReducer from "./tasks/tasksReducer";
import tasksVisibilityReducer from "./tasks-visibility/tasksVisibilityReducer";
import {combineReducers} from "redux";
const rootReducer = combineReducers({
	tasksReducer,
	tasksVisibilityReducer,
});

export default rootReducer;
