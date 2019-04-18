/**
 * Import, variables
 */
import appState from "../store/appState";
import * as getAction from "../actions/actions";

const reducerTaskList = (state = appState, action) => {
    switch (action.type) {
        case getAction.ADD_TASK: {
            if (state.tasks.includes(action.value)) {
                alert("This task already exist");
                return state;
            } else {
                const newTab = [...state.tasks];
                newTab.push(action.value);
                const newState = {...state, tasks: newTab};
                return newState;
            }
        }
        case getAction.DELETE: {
            const index = state.tasks.indexOf(action.value);
            const newTab = [...state.tasks];

            newTab.splice(index, 1);

            const newState = {...state, tasks: newTab};
            return newState;
        }
        case getAction.UPDATE: {
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

export default reducerTaskList;