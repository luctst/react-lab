/**
 * Add a task when not already existing in the tasks array.
 * @param {Object} state The state of our app.
 * @param {Object} action An object passed with a type property and the value to add in tasks array.
 */
export const ADD_TASK_FUNCTION = (state, action) => {
	if (state.tasks.includes(action.value)) {
		alert("This task already exist");
		return state;
	} else {
		const newTab = [...state.tasks];
		newTab.push(action.value);
		const newState = { ...state, tasks: newTab };
		return newState;
	}
}
