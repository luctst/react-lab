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
		const newState = {...state};
		newState.todo.push(action.value);
		return newState;
	}
}

export const DELETE_TASK_FUNCTION = (state, action) => {
	const index = state[action.visibilityTab].indexOf(action.value);
	const newState = {...state};

	newState[action.visibilityTab].splice(index, 1);
	newState.deleted.push(action.value);
	alert(`Task: ${action.value} move in deleted tab.`);

	return newState;
}

export const UPTATE_TASK_FUNCTION = (state, action) => {
	const newState = {...state};
	newState[action.data.visibilityTab][action.data.indexToUpdate] = action.data.newValue;
	return newState;
}
