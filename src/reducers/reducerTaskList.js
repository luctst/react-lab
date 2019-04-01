/**
 * Import, variables
 */
import initState from "../store/InitState";
import * as getAction from "../actions/actions";

const reducerTaskList = (state = initState, action) => {
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
        default:
            return state;
    }
};

export default reducerTaskList;