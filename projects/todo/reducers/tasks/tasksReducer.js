import appState from "../../state/state";
import {ADD_TASK, DELETE, UPDATE, MOVE} from "../../actions/tasks";
import {ADD_TASK_FUNCTION, DELETE_TASK_FUNCTION, UPTATE_TASK_FUNCTION, MOVE_TASK_FUNCTION} from "./utility";

const tasksReducer = (state = appState.tasks, action) => {
    switch (action.type) {
        case ADD_TASK:
            return ADD_TASK_FUNCTION(state, action);
		case MOVE:
			return MOVE_TASK_FUNCTION(state, action);
        case UPDATE:
			return UPTATE_TASK_FUNCTION(state, action);
		case DELETE:
			return DELETE_TASK_FUNCTION(state, action);
        default:
            return state;
    }
};

export default tasksReducer;
