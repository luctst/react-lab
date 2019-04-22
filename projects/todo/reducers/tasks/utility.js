/**
 * This file hold all our functions called in the `tasksReducer` reducer.
 * @param {Object} state The state of our app.
 * @param {Object} action An object passed with a type property and the value to add in tasks array.
 */

export const ADD_TASK_FUNCTION = (state, action) => {
	if (state.todo.includes(action.value)) {
		alert("This task already exist");
		return state;
	} else {
		const newState = { ...state };
		newState.todo.push(action.value);
		return newState;
	}
}

export const MOVE_TASK_FUNCTION = (state, action) => {
	if (action.data.visibilityTab === action.data.moveInTab) {
		alert(`This task is already in the ${action.data.moveInTab} tab`);
		return state;
	} else if (state[action.data.moveInTab].includes(action.data.value)) {
		alert(`${action.data.moveInTab} field already contains the "${action.data.value}" task.`);
		return state;
	} else {
		const index = state[action.data.visibilityTab].indexOf(action.data.value);
		const newState = { ...state };

		newState[action.data.visibilityTab].splice(index, 1);
		newState[action.data.moveInTab].push(action.data.value);

		return newState;
	}
}

export const UPTATE_TASK_FUNCTION = (state, action) => {
	const newState = { ...state };
	newState[action.data.visibilityTab][action.data.indexToUpdate] = action.data.newValue;
	return newState;
}

export const DELETE_TASK_FUNCTION = (state, action) => {
	const newState = {...state};
	const indexOfTask = newState.deleted.indexOf(action.data.taskToDelete);

	newState.deleted.splice(indexOfTask, 1);

	return newState;
}
