import {appState} from "../../store/appState";
import {ADD_TASK, DELETE, UPDATE} from "../../actions/tasks";
import {ADD_TASK_FUNCTION} from "./utility";

const tasksReducer = (state = appState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return ADD_TASK_FUNCTION(state, action);
        case DELETE: {
            const index = state.tasks.indexOf(action.value);
            const newTab = [...state.tasks];

            newTab.splice(index, 1);

            const newState = {...state, tasks: newTab};
            return newState;
        }
        case UPDATE: {
            const newTab = [...state.tasks];
            const indexToUpdate = newTab.indexOf(action.data.oldValue);

            newTab[indexToUpdate] = action.data.newValue;

            const newState = {...state, tasks: newTab};
            return newState;
        }
        default:
            return state;
    }
};

export default tasksReducer;
